import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-[full] lg:w-[1400px] mx-auto py-[70px] bg-[#FFFCF6]'>
        <div className="h-[1px] bg-[#313F38]"></div>
        <div className="flex justify-between items-start pt-[70px]">
            <div className="flex flex-col items-start justify-center gap-[30px]">
                <h4 className='font-[Space Mono] text-[26px] text-[black] uppercase'><span className='text-[#FCD043]'>/</span>About us</h4>
                <p className='text-[16px] text-[#1B3B36]'>The five-star hotel in a beautiful <br />  European city with a modern <br /> restaurant, conference-hall, and art-bar.</p>
            </div>
            <div className="hidden lg:flex flex-col items-start justify-center gap-[30px]">
                <h4 className='font-[Space Mono] text-[26px] text-[black] uppercase'><span className='text-[#FCD043]'>/</span>News</h4>
                <p className='text-[16px] text-[#1B3B36]'>Sign up to our <span> <Link className='text-[#1B3B36] no-underline link' to='/signup'>newsletter</Link> </span> not to miss <br /> exclusive offers and information about <br /> the upcoming events.</p>
            </div>
            <div className="hidden lg:flex flex-col items-start justify-center gap-[10px]">
                <h4 className='font-[Space Mono] text-[26px] text-[black] uppercase'><span className='text-[#FCD043]'>/</span>Social</h4>
                <a className='font-[Space Mono] text-[16px] text-[black] uppercase no-underline' href="#">Facebook</a>
                <a className='font-[Space Mono] text-[16px] text-[black] uppercase no-underline' href="#">Instagram</a>
                <a className='font-[Space Mono] text-[16px] text-[black] uppercase no-underline' href="#">twitter</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer