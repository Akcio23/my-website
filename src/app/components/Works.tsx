import React from 'react'
import Cards from './Cards'


const Works = () => {
  return (
    
    <div className='w-[100%] flex flex-col justify-center items-center '>
      
      <p className='text-white text-2xl sm:text-5xl mt-7'>Meus Trabalhos</p>
    <div className='flex flex-col gap-6 sm:flex sm:flex-row justify-center sm:w-[100%] mt-10'>
     
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  
    </div>
  )
}

export default Works
