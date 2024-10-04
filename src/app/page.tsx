import React from 'react';
import NavBar from './components/NavBar';
import * as motion from "framer-motion/client"
import Start from './components/Start';
import WelcomeAnimation from './components/WelcomeAnimation';
import Cards from './components/Cards';
import Works from './components/Works';
import Timeline from './components/Timeline';

const Page = () => {
  return (
    <div className='z-50 flex flex-col w-screen  justify-center items-center 
    text-white dark:text-white
    bg-gradient-to-b from-green-300 to-blue-400
    dark:bg-gradient-to-b dark:from-gray-900 dark:to-black relative overflow-hidden'>
    
  
    <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl "></div>
    
   
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg shadow-lg"></div>

    <NavBar />
    

    <div className='  text-center w-[90%] sm:w-[70%] z-10 mt-24 sm:mt-36 flex flex-col gap-5'>
      <WelcomeAnimation/>
      
      <div className='lg:w-[50%]'><Start /></div>
      <div className='mt-10'> <Timeline/></div>
     
    </div>

    
    <motion.div className='z-10  rounded-3xl w-[90%] sm:w-[70%] mt-10
    "bg-white text-black bg-gradient-to-b from-green-200 to-transparent
    dark:bg-gradient-to-b dark:from-slate-900  dark:to-transparent  dark:text-white '
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }} // Estado inicial
      animate={{ opacity: 1, scale: 1, rotate: 0 }} // Estado final
      transition={{ duration: 0.8, ease: "easeInOut" }} // Transição
    >
    <Works/>
    </motion.div>
    
    
 
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2}}
      transition={{ duration: 5 }} // Adicionando transição
      className='z-10 mt-10'
    >
      <p>Este texto aparecerá suavemente!</p>
    </motion.div>
    
  


    

</div>)
}

export default Page;
