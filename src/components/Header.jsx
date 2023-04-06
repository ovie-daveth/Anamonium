import React from 'react'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'

import { FaMinus, FaPlus, FaSearchLocation, FaUser, FaFacebookF, FaInstagram} from 'react-icons/fa'
import {BsCart2, BsTwitter} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {FiDribbble} from 'react-icons/fi'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center px-24 py-2 bg-purple-900 text-white text-sm'>
        <div className='flex items-center gap-6'>
            <p className='flex items-center gap-2'><span><MdEmail /></span>info@anamonium.com</p>
            <p className='flex items-center gap-2'><span><ImLocation2 /></span> 23 BDPA, Benin City, Edo State, (NG)</p>
        </div>
        <div className='flex items-center gap-5'>
           <a href="https://www.facebook.com/"  target="_blank" rel="noreferrer" className='hover:text-gray-400'> <FaFacebookF /></a> 
           <a href="https://www.instagram.com/"  target="_blank" rel="noreferrer" className='hover:text-gray-400'><FaInstagram /> </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"  className='hover:text-gray-400'> <BsTwitter /></a>
            <a href="https://www.dribble.com" target="_blank" rel="noreferrer" className='hover:text-gray-400'><FiDribbble /></a>
            <button className=' before:bg-red-700 before:left-0 before:top-0 before:bottom-0 before:w-full relative before:absolute before:-z-50 z-50 py-2 px-6 rounded-sm ml-5 border border-red-700 hover:before:w-0 before:transition-all before:ease-in-out before:duration-500 active:bg-red-700'>Be an Agent</button>
        </div>
    </div>
    <div className='flex items-center justify-between px-24 py-3 bg-white'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt="logo" width="80px" />
        <h3 className='text-2xl font-bold'>Anamonium</h3>
      </div>
      <ul className='flex items-center justify-center gap-6'>
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
      </div>
    </div>
    </>
  )
}

export default Header
