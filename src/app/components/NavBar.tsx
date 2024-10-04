'use client'; // Certifica-se de que o componente é compatível com o ambiente cliente

import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import * as motion from "framer-motion/client"

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-50 flex flex-row w-[98%] sm:w-[40%] p-5 gap-3 justify-around rounded-lg fixed top-6 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md dark:bg-gray-900/30 dark:backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <p className="whitespace-nowrap cursor-pointer">Sobre</p>
      <p className="whitespace-nowrap cursor-pointer">Trabalhos</p>
      <p className="whitespace-nowrap cursor-pointer">Contatos</p>

      {/* Animação de troca de ícones */}
      <motion.div
        onClick={toggleDarkMode}
        className="cursor-pointer"
        initial={{ rotate: 0 }} 
        animate={{ rotate: darkMode ? 180 : 0 }} 
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Sun />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default NavBar;
