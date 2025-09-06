function Eventos() {
  const eventosPorMes = [
    { mes: 'ENERO', evento: ['01 ENE - AÑO NUEVO', '05 ENE - REYES'] },
    { mes: 'FEBRERO', evento: ['14 FEB - SAN VALENTÍN' , '21 FEB - CARNAVAL'] },
    { mes: 'MARZO', evento: ['21 MAR - PRIMAVERA'] },
    { mes: 'ABRIL', evento: ['04 ABR - SEMANA SANTA', '25 ABR - SANT JORDI'] },
    { mes: 'MAYO', evento: ['01 MAY - DÍA DEL TRABAJADOR', '12 MAY - PIJAMA PARTY'] },
    { mes: 'JUNIO', evento: ['23 JUN - SAN JUAN'] },
    { mes: 'JULIO', evento: ['18 JUL - VERANO'] },
    { mes: 'AGOSTO', evento: ['15 AGO - VERANO'] },
    { mes: 'SEPTIEMBRE', evento: ['12 SEP - VUELTA A CLASES'] },
    { mes: 'OCTUBRE', evento: ['31 OCT - HALLOWEEN'] },
    { mes: 'NOVIEMBRE', evento: ['07 NOV - DÍA DE TODOS LOS SANTOS'] },
    { mes: 'DICIEMBRE', evento: ['25 DIC - NAVIDAD'] }
  ];

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen bg-zinc-800 px-4 py-8'>

        <div className='w-full max-w-4xl bg-zinc-900 rounded-lg shadow-lg border-amber-200 border-2 p-4 sm:p-6'>
          {eventosPorMes.map((mesItem, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row border-b-2 border-zinc-600 last:border-b-0 py-4'
            >

              <div className='w-full md:w-1/4 text-white font-bold text-lg sm:text-xl md:border-r-2 border-zinc-600 mb-3 md:mb-0 pr-0 md:pr-4 text-center md:text-left'>
                {mesItem.mes}
              </div>


              <div className='w-full md:w-3/4 flex flex-col gap-2'>
                {mesItem.evento.map((evento, eventIndex) => (
                  <div
                    key={eventIndex}
                    className='bg-amber-50 font-bold rounded-lg p-2 text-sm sm:text-base md:text-lg text-center md:text-left'
                  >
                    {evento}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Eventos;
