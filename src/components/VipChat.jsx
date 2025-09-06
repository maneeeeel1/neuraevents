import React, { useState, useEffect, useRef } from 'react';

const VipChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [pedido, setPedido] = useState({ tipoEntrada: '', nombreCliente: '' });
    const chatEndRef = useRef(null);

    const chatHistory = [
        { role: 'system', content: 'Eres un asistente de ventas VIP para un evento. Tu objetivo es guiar al cliente a través de la lista de precios y, una vez que elija, notificar al equipo de ventas. No puedes vender otros productos que no estén en la lista. Si el cliente pregunta por otras cosas, recuérdale que solo puedes hablar de las opciones VIP. Si el cliente se decide, pides su nombre para completar el pedido.' },
        { role: 'assistant', content: 'Hola, soy tu asistente VIP. Aquí tienes nuestra lista de precios:\n- Entrada VIP: $150\n- Mesa VIP (hasta 4 personas): $500\n- Paquete Diamante: $1000\n\n¿Qué tipo de entrada deseas?' }
    ];

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ sender: 'bot', text: chatHistory[1].content }]);
        }
    }, [isOpen]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');

        const apiMessages = [...chatHistory, ...newMessages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
        }))];

        try {
            const iaResponse = await fetch('http://localhost:8000/api/chat/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mensajes: apiMessages }),
            });

            const data = await iaResponse.json();
            const botMessageText = data.respuesta || 'Lo siento, no entendí.';

            setMessages(prev => [...prev, { sender: 'bot', text: botMessageText }]);

            const entradaSeleccionada = ['entrada vip', 'mesa vip', 'paquete diamante'].find(entrada =>
                userMessage.text.toLowerCase().includes(entrada)
            );

            if (entradaSeleccionada && !pedido.tipoEntrada) {
                setPedido(prev => ({ ...prev, tipoEntrada: entradaSeleccionada }));
            }

            if (botMessageText.toLowerCase().includes('he registrado tu pedido')) {
                const ultimoMensajeUsuario = newMessages.findLast(msg => msg.sender === 'user');

                if (pedido.tipoEntrada && ultimoMensajeUsuario) {
                    const nombreCliente = ultimoMensajeUsuario.text;

                    console.log('Enviando solicitud al backend:', {
                        nombre: nombreCliente,
                        tipo: pedido.tipoEntrada,
                        cantidad: 1
                    });

                    await fetch('http://localhost:8000/api/solicitudes/vip', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            nombre: nombreCliente,
                            tipo: pedido.tipoEntrada,
                            cantidad: 1
                        }),
                    });

                    setPedido({ tipoEntrada: '', nombreCliente: '' });
                }
            }
        } catch (error) {
            console.error('Error en el chat VIP:', error);
            setMessages(prev => [...prev, { sender: 'bot', text: 'Lo siento, hubo un error en la conexión.' }]);
        }
    };

    return (
        <div>
            {!isOpen && (
            <button 
            className='bg-amber-200 text-zinc-800 font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 
            w-full sm:w-auto mt-3 sm:mt-0'
            onClick={() => setIsOpen(true)}
            >
                VIP
            </button>
            )}


            {isOpen && (
                <div className='fixed bottom-5 right-5 w-80 h-[500px] bg-white rounded-t-3xl shadow-lg flex flex-col z-50'>

                    <div className='bg-zinc-900 text-white p-4 rounded-t-2xl flex justify-between items-center'>
                        <h3 className='font-bold'>Asistente VIP</h3>
                        <button onClick={() => setIsOpen(false)}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                    <div className='flex-grow p-4 overflow-y-auto flex flex-col gap-3 scrollbar-hide'>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg max-w-[80%] shadow ${msg.sender === 'user' ? 'bg-amber-300 self-end' : 'bg-gray-500 text-white self-start'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <div className='p-4 border-t border-gray-300 flex items-center gap-2'>
                        <input
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder='Escribe tu respuesta...'
                            className='flex-grow p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black'
                        />
                        <button
                            className='bg-amber-300 text-black w-12 h-10 rounded-full flex items-center justify-center font-bold'
                            onClick={handleSendMessage}
                        >
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-5 h-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VipChat;
