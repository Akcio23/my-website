import React from 'react'
import * as motion from "framer-motion/client"
import Image from 'next/image';

const Start = () => {
    const text = "Olá eu sou o Pedro! Tenho 22 anos e sou um desenvolvedor fullstack, minha jornada em tecnologia começou cedo, sendo atraído pela magia da área de hardware e desenvolvimento.";
    
    return (
        <div className="text-start text-2xl w-[100%]  sm:text-2xl z-10
        flex justify-evenly items-center 
        ">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='md:w-[50%]'
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }} // delay based on the character index
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className='hidden md:flex'>
  <img
    src="my.jpg"
    alt="EU"
    width={150}
    className="border-4 border-white rounded-xl p-2 shadow-lg animate-borderGlow"
  />
</div>

      </div>
    );
  };
  
  export default Start;