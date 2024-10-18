  import React from 'react';
import * as motion from "framer-motion/client"

const Timeline = () => {
  const events = [
    { year: '2018', title: 'Início', description: 'Começo do desenvolvimento do projeto.' },
    { year: '2019', title: 'Lançamento', description: 'A versão beta foi lançada para testes.' },
    { year: '2020', title: 'Feedback', description: 'Recebemos feedback dos usuários sobre a versão beta.' },
    { year: '2021', title: 'Lançamento', description: 'Lançamento oficial da versão 1.0 do projeto.' },
    { year: '2022', title: 'Expansão', description: 'Adição de novas funcionalidades com base no feedback.' },
  ];

  return (
    <motion.div
      className='border-l-4 sm:border-none'
      initial={{ opacity: 0, y: -100 }} // Título começa invisível e acima da tela
      animate={{ opacity: 1, y: 0 }}  // Anima para aparecer e mover para a posição original
      transition={{ duration: 3 }} // Duração da animação
    >
      <motion.h2
        className='text-2xl font-mono sm:border-b-4 pb-2'
        initial={{ opacity: 0, x: -100 }} // Começa invisível e à esquerda
        animate={{ opacity: 1, x: 0 }}  // Anima para aparecer e mover para a posição original
        transition={{ duration: 3}} // Duração da animação do título
      >
        Linha do Tempo
      </motion.h2>

      <motion.div
        className='flex flex-col sm:flex-row justify-evenly gap-4'
        initial={{ opacity: 0 }}  // A timeline começa invisível
        animate={{ opacity: 1 }}   // Anima para ficar visível
        transition={{ duration: 2, delay: 0.5 }}  // Duração e delay para animação suave
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className='py-4 font-bold w-full sm:w-auto'
            initial={{ opacity: 0, y: 400 }} // Começa invisível e ligeiramente abaixo
            animate={{ opacity: 1, y: 0 }}  // Anima para aparecer e mover para o topo
            transition={{ duration: 2, delay: index * 0.3 }} // Diferencia o delay de cada item
          >
            <div className='flex gap-3 sm:justify-center'>
              <p className='pl-2'>{event.year}</p>
              <p>{event.title}</p>
            </div>
            <p className='text-start pl-2 font-light mt-2'>
              {event.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Timeline;
