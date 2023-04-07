import React, { useState } from 'react'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'

import { FaMinus, FaPlus, FaSearchLocation, FaUser, FaFacebookF, FaInstagram, FaTimes} from 'react-icons/fa'
import {BsCart2, BsTwitter} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {BiMenu} from 'react-icons/bi'
import {FiDribbble} from 'react-icons/fi'
import { motion } from 'framer-motion'

const Header = () => {
  const [openMenu, closemenu] = useState(false)

  const menuOpen = () => {
    closemenu(!openMenu)
  }
  return (
    <>
    <div className='flex flex-col md:flex-row md:gap-0 justify-between items-center md:px-24 px-2 py-2 bg-purple-900 text-white text-sm'>
        <div className='hidden md:flex flex-col md:flex-row justify-center text-center items-center md:gap-6 gap-2'>
            <p className='flex items-center gap-2'><span><MdEmail /></span>info@anamonium.com</p>
            <p className='flex md:items-center md:gap-2 gap-[3px] justify-center'><span><ImLocation2 /></span> 23 BDPA, Benin City, Edo State, (NG)</p>
        </div>
        <div className='flex md:justify-center justify-between md:text-center items-center md:gap-5 gap-28'>
           <div className="flex gap-5">
           <a href="https://www.facebook.com/"  target="_blank" rel="noreferrer" className='hover:text-gray-400'> <FaFacebookF /></a> 
           <a href="https://www.instagram.com/"  target="_blank" rel="noreferrer" className='hover:text-gray-400'><FaInstagram /> </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"  className='hover:text-gray-400'> <BsTwitter /></a>
            <a href="https://www.dribble.com" target="_blank" rel="noreferrer" className='hover:text-gray-400'><FiDribbble /></a>
           </div>
            <button className=' before:bg-red-700 before:left-0 before:top-0 before:bottom-0 before:w-full relative before:absolute before:-z-50 z-50 py-2 px-6 rounded-sm md:ml-5 border border-red-700 hover:before:w-0 before:transition-all before:ease-in-out before:duration-500 active:bg-red-700'>Be an Agent</button>
        </div>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-between md:px-24 px-5 py-3 bg-white'>
      <div className='flex items-center md:gap-3 gap-1'>
        <img src={logo} alt="logo" className='md:w-[80px] w-[60px]' />
        <h3 className='md:text-2xl text-lg font-bold'>Anamonium</h3>
      </div>
      <ul className={`md:flex md:flex-row items-center md:relative justify-center gap-6 ${openMenu === true ? "flex flex-col absolute left-0 bg-white px-6 py-6 z-50 w-[300px]" : " hidden"}`}>
        <p onClick={() =>  closemenu(false)} className='md:hidden absolute top-3 right-6 text-lg bg-white shadow-md p-2 rounded-full'><FaTimes /></p>
        <li className='group'><a className='text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' href="#home"><span>Home</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></a></li>
        <li className='group'><a className='text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' href="#About"><span>About</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></a></li>
        <li className='group'><a className='text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' href="#find"><span>Find</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></a></li>
        <li className='group'><a className='text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' href="#shop"><span>Shop</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></a></li>
        <Link className='group text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' to="/news"><span>News</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></Link>
        <Link className='group text-lg font-semibold text-black hover:text-red-600 transition-colors ease-in-out duration-300 flex items-center gap-2' to='/contact'><span>Contact</span><FaPlus className='group-hover:hidden font-medium text-sm'/><FaMinus className='hidden group-hover:block font-medium text-sm'/></Link>
      </ul>
      <div className='flex items-center gap-5'>
        <motion.span whileHover={{ scale: 0.9 }}  className=' cursor-pointer bg-white shadow-md p-2 text-xl'><FaSearchLocation /></motion.span>
        <span className={`hidden`}><input type="search" /></span>
        <motion.span  whileHover={{ scale: 0.9 }} className=' cursor-pointer bg-white shadow-md p-2 text-xl'><FaUser /></motion.span>
        <motion.span  whileHover={{ scale: 0.9 }} className=' cursor-pointer bg-white shadow-md p-2 text-xl'><BsCart2/></motion.span>
        <motion.span 
        onClick={menuOpen}
        whileHover={{ scale: 0.9 }} className=' cursor-pointer bg-white shadow-md p-2 text-xl block md:hidden'>
          {
            openMenu === true ? <FaTimes /> : <BiMenu />
          }
        </motion.span>
      </div>
    </div>
    </>
  )
}

export default Header
