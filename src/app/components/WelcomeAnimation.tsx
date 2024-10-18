import React from 'react';
import * as motion from "framer-motion/client"

const WelcomeAnimation = () => {
  const welcomeText = "Hello world";

  // Definindo a animação
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='text-3xl sm:text-7xl text-center'
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {welcomeText.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
         
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WelcomeAnimation;
