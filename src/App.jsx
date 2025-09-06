import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Entradas from './components/Entradas.jsx';
import Eventos from './components/Eventos.jsx';
import Home from './components/Home.jsx';
import Mail from './icons/Mail.jsx';
import Phone from './icons/Phone.jsx';
import Instagram from './icons/Insta.jsx';
import Linkedn from './icons/Linkedin.jsx';
import Tiktok from './icons/Tiktok.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <nav className='w-full flex justify-center bg-zinc-800'>
          <div className='flex flex-col sm:flex-row items-center text-white py-4'>
            <Link
              to='/eventos'
              className='mb-0 sm:mb-0 sm:mr-20 text-xl sm:text-3xl text-amber-200 sm:text-white hover:text-amber-200 hover:scale-110 cursor-pointer transition duration-300'
            >
              EVENTOS
            </Link>

          <div className='relative m-4 w-16 h-16 sm:w-20 sm:h-20 group'>
            <Link to='/'>
              <img
              className='w-full h-25 relative z-10'
              src='../logo_web_notfondo.png'
              alt='logo'
              />
            </Link>
            <Link to='/'>
              <img
              className='
              w-full h-25 absolute top-0 left-0 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              z-20 sm:z-0 sm:group-hover:z-20 
              transition-all duration-300 
              sm:group-hover:scale-110
              '
              src='../rayo_color.png'
              alt='rayo'
              />
            </Link>
          </div>


            <Link
              to='/entradas'
              className='mt-10 sm:mt-0 sm:ml-20 text-xl sm:text-3xl text-amber-200 sm:text-white hover:text-amber-200 hover:scale-110 cursor-pointer transition duration-300'
            >
              ENTRADAS
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entradas' element={<Entradas />} />
          <Route path='/eventos' element={<Eventos />} />
        </Routes>


        <footer className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white mt-6'>

        <div className='flex flex-col items-center text-center md:items-start md:text-left'>

          <img
            src='../logo_final_sinfondo.png'
            alt='logo_corp'
            className='w-20 h-9'
          />

        <div className='flex items-center mt-4'>
          <Mail />
          <p className='ml-2 font-bold text-sm sm:text-base'>
            neuraevents@gmail.com
          </p>
        </div>

        <div className='flex items-center mt-2'>
          <Phone />
          <p className='ml-2 font-bold text-sm sm:text-base'>644 85 48 76</p>
        </div>
      </div>



      <div className='flex flex-col items-center'>
        <h3 className='mb-2 text-base sm:text-lg'>REDES SOCIALES</h3>
          <ul className='flex space-x-4'>
            <li>
              <a href='https://instagram.com'>
                <Instagram />
              </a>
            </li>
            <li>
              <a href='https://tiktok.com'>
                <Tiktok />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com'>
                <Linkedn />
              </a>
            </li>
          </ul>
      </div>


      <div className='flex flex-col items-center md:items-end'>
        <h3 className='mb-2 text-base sm:text-lg'>
          Suscríbete para más noticias
        </h3>
        <form className='flex flex-col space-y-2 w-full max-w-xs'>
          <input
            type='email'
            placeholder='Escribe tu email'
            className='p-2 rounded text-black bg-white text-sm sm:text-base'
          />
          <button
            type='submit'
            className='bg-amber-500 hover:bg-amber-600 text-white py-1 px-4 rounded text-sm sm:text-base'
          >
            Enviar
          </button>
        </form>
      </div>


      <div className='col-span-1 md:col-span-3 text-center text-xs sm:text-sm text-gray-400'>
        2025 Neura Events. All rights reserved.
      </div>
    </footer>
    </>
    </BrowserRouter>
  );
}

export default App;
