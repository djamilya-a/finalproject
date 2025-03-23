import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-[#313F38]'>
      <div className="w-[100%] lg:w-[1024px] xl:w-[1400px] mx-auto py-[50px] flex justify-between items-center">
        <div className="logo">
          <h4 className='font-[El Messiri] font-semibold text-[20px] text-[#FFFCF6]'>AerisHotel</h4>
        </div>
        <nav className='hidden md:flex justify-between gap-[60px]'>
          <Link className='uppercase text-[#FFFCF6] text-[14px] no-underline' to='/'>Home</Link>
          <Link className='uppercase text-[#FFFCF6] text-[14px] no-underline' to='/about'>About</Link>
          <Link className='uppercase text-[#FFFCF6] text-[14px] no-underline' to='/signup'>Sign Up</Link>
          <Link className='uppercase text-[#FFFCF6] text-[14px] no-underline' to='/facilites'>Restaurant</Link>
          <Link className='uppercase text-[#FFFCF6] text-[14px] no-underline' to='/rooms'>Our best room</Link>
        </nav>
        <div className="contact">
          <h5 className='font-[El Messiri] text-[16px] text-[#FFFCF6]'>+996 553 80 27 72</h5>
        </div>
      </div>
    </header>
  )
}

export default Header