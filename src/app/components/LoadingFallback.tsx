import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingFallback: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // Atualiza as dimensões da janela quando o componente for montado
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <div className="z-50 flex flex-col w-full h-screen justify-center items-center text-white dark:text-white bg-gradient-to-b from-green-300 to-blue-400 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Fundo com partículas animadas */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg shadow-lg"></div>

      {/* Parte de partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            animate={{
              x: [Math.random() * windowWidth, Math.random() * windowWidth],
              y: [Math.random() * windowHeight, Math.random() * windowHeight],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Título com efeito retrô */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-mono tracking-widest text-green-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          LOADING...
        </motion.h1>

        {/* Barra de progresso */}
        <motion.div
          className="relative mt-8 w-64 h-6 bg-gray-800 border-4 border-green-400 rounded-md"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-green-500 h-full"
            animate={{
              scaleX: [0, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Texto de dica estilo jogo */}
        <motion.p
          className="mt-4 text-green-300 text-lg font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingFallback;
