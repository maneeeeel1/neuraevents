import React from 'react';
import VipChat from './VipChat';

function Entradas() {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-zinc-800 px-4 py-8'>

        <div className='w-60 md:w-200 max-w-4xl border-2 border-amber-200 rounded-lg bg-zinc-900 text-white flex flex-col md:flex-row overflow-hidden shadow-lg'>

          <img
            src='../flyer_pijama.png'
            alt='flyer pijama party'
            className='w-60 md:w-50 object-cover h-80 md:h-auto'
          />


          <div className='flex flex-col justify-between p-4 md:p-6 flex-1'>
            <h4 className='font-bold text-lg md:text-xl mb-2'>
              Pijama's Party House
            </h4>
            <p className='text-sm md:text-base leading-relaxed mb-2'>
              <b>Ubicación:</b> C/Josep Verenguer 15, Matadepera <br />
              <b>Vestimenta:</b> PIJAMA (¡a vuestro gusto!)
            </p>
            <p className='font-bold text-sm md:text-base mb-4'>+21</p>


            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
              <a
                href='https://www.fourvenues.com/neura-events/events/pijamas-party-12-05-2026-V427'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='w-full sm:w-auto bg-amber-200 text-zinc-800 font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
                  ENTRADAS
                </button>
              </a>
              <VipChat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entradas;
