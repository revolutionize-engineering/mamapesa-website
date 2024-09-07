import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import ImageHero from '../assets/ImageHero.jpg';
import Features from '../Features/Features';

const Hero = () => {
  return (
    /*Background Image*/
    <div className="relative w-full min-h-96 h-full ">
        <img
            src={ImageHero}
            alt='Background'
            className='hidden lg:block w-full object-cover '
        />        

    <main className="absolute top-8 left-5 flex flex-col lg:flex-row items-center lg:justify-between mt-10 p-6 bg-opacity-80 bg-white shadow-lg rounded-lg max-w-4xl">
        <div>
            <h1 className="text-4xl font-montserrat font-bold mb-6">Unlocking Financial Inclusion For Women in Africa </h1>
            <ul className="list-none space-y-6">
                <li className="flex items-center">
                    <CheckCircle size={32} className="mr-2 fill-green-500" />
                    <span className="font-semibold text-lg">Personalized financial guidance using mamapesa chatbot
                    </span>
                </li>

                <li className="flex items-center">
                    <CheckCircle size={32} className="mr-2 fill-green-500" />
                    <span className="font-semibold text-lg">Loans at 0% interest rate</span>
                </li>

                <li className="flex items-center">
                    <CheckCircle size={32} className="mr-2 fill-green-500" />
                    <span className="font-semibold text-lg">Goal oriented asset savings </span>
                </li>

                <li className="flex items-center">
                    <CheckCircle size={32} className="mr-2 fill-green-500" />
                    <span className="font-semibold text-lg">Group savings  </span>
                </li>

                <li className="flex items-center">
                    <CheckCircle size={32} className="mr-2 fill-green-500" />
                    <span className="font-semibold text-lg">Additional services   </span>
                </li>
            </ul>

            <button className="font-montserrat font-semibold text-white py-2 px-4 my-6 rounded hover:bg-[#7a2713] bg-[#571C0E]" onClick={() => document.getElementById('features-section').scrollIntoView({ behavior:'smooth'})} >
                View our Services
            </button>
        </div>

    </main>
    </div>
  )
}

export default Hero