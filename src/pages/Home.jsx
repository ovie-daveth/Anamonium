import React, { useState } from 'react'
import { FaHome, FaPlay } from 'react-icons/fa'
import home from '../assets/img/21.png'
import { motion } from 'framer-motion'

function Home() {
  const [typo, setTypo] = useState('one')


  const changeTypo = (id) => {
    setTypo(id)
  }




  return (
    <div className='flex flex-col justify-center align-middle items-center py-12'>
      <div
        className={`flex justify-between md:flex-row flex-col items-center md:px-24 px-5 gap-20 transition ease-in-out duration-300 ${typo === 'two' ? 'md:flex-row-reverse flex-col ' : 'row transition ease-in-out duration-300'}`}>
          <div className={` ${typo === 'two'? 'text-right items-end': ''} flex flex-col gap-2 md:w-[40%] w-[100%]`}>
            <motion.p
              initial={{ translateY: 150, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
            className=' flex gap-1 font-bold items-center md:text-xl'><span className='text-red-700 md:text-2xl'><FaHome /></span>Student Hostel Portal</motion.p>
            <motion.h1
             initial={{ translateY: 150, opacity: 0 }}
             whileInView={{ translateY: 0, opacity: 1 }}
             transition={{
               ease: "linear",
               duration: 1.5,
             }}
            className='md:text-6xl text-3xl font-extrabold'>FIND A HOSTEL WITH EASE</motion.h1>
            <motion.p
             initial={{ translateY: 150, opacity: 0 }}
             whileInView={{ translateY: 0, opacity: 1 }}
             transition={{
               ease: "linear",
               duration: 2,
             }}
            className={` ${typo === 'two'? "pl-[unset] before:right-0 before:left-[unset] md:w-[90%] " : ''} md:w-[80%] text-gray-600 pl-8  before:bg-gray-700 before:absolute relative before:top-0 before:bottom-0 before:left-0 before:w-[1px] pr-10 py-1 my-4`}>You dont't need that stress, we connect you to closeby and affordable hostels</motion.p>
            <motion.div
             initial={{ translateY: 150, opacity: 0 }}
             whileInView={{ translateY: 0, opacity: 1 }}
             transition={{
               ease: "linear",
               duration: 2.5,
             }}
            className="flex items-center gap-6">
              <button className='py-3 px-6 border-red-700 border text-white before:bg-red-700 before:left-0 before:top-0 before:bottom-0 before:w-full relative before:absolute before:-z-50 z-50 hover:before:w-0 hover:text-red-700 before:transition-all before:ease-in-out before:duration-500 active:bg-red-700'>Make an Enquiry</button>
              <motion.button
              initial={{scale: 0.95}}
              animate={{scale: 1.1}}
              transition={{
                ease: "linear",
                duration: .5,
                repeat: "infinity"
              }}
              className={`bg-white shadow-lg w-[40px] h-[40px] rounded-full text-red-700 p-1 flex items-center justify-center text-xl  ${typo === 'two' ? "hidden" : ''} `}><FaPlay /></motion.button>
              <button className={` ${typo === 'two' ? "block": "hidden"} border border-gray-500 py-3 px-6  before:bg-red-700 before:left-0 before:top-0 before:bottom-0 before:w-0 relative before:absolute before:-z-50 z-50 hover:before:w-full hover:text-white before:transition-all before:ease-in-out before:duration-500 active:bg-red-700`}>Learn More</button>
            </motion.div>
          </div>
          <motion.div className='md:w-[40%] w-[100%]'
          initial={{ translateX: 150 }}
          whileInView={{ translateX: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
          >
            <motion.img
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            src={home} width="100%" alt="home" className='' />
          </motion.div>
      </div>
      <div className='mt-6 flex items-center gap-2'>
        <span id="one" onClick={() =>changeTypo('one')} className={` ${typo === 'one' ? 'bg-red-700 h-[20px] w-[20px] border-none': ''} bg-gray-500 border border-gray-600 w-[15px] h-[15px] rounded-full cursor-pointer`}></span>
        <span onClick={() =>changeTypo('two')} id="two" className={` ${typo === 'two' ? 'bg-red-700 h-[20px] w-[20px] border-none': ''} bg-gray-500 border border-gray-600 w-[15px] h-[15px] rounded-full cursor-pointer`}></span>
      </div>
  </div>
  )
}

export default Home
