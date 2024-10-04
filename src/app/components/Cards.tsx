import React from 'react'
import * as motion from "framer-motion/client"

const Card = () => {


  return (
    <motion.div
      className="bg-white text-black dark:bg-slate-500 dark:text-white  rounded-lg shadow-md w-40 h-40 flex flex-col items-center justify-center sm:justify-start sm-items-start"
      initial={{ opacity: 0, scale: 0, x: 300,  }}
      animate={{ opacity: 1, scale: 1, x: 0, }}
      transition={{ ease: "anticipate", duration: 4, delay: 1 }}

    >
      <h3 className="font-bold flex h-screen">title</h3>
      <p>description</p>
      <p>description</p>
      <p>description</p>
  
    </motion.div>
  )
}

export default Card
