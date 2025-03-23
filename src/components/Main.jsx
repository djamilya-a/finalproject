import React from 'react'
import Chip from './Chip'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className='bg-[#313F38]'>
      <div className="w-[100%] lg:w-[1024px] xl:w-[1400px] mx-[auto]">
        <div className="flex items-end justify-between pb-[70px]">
          <div className="">
            <h1 className='text-[#FFFCF6] text-[80px] lg:text-[120px] xl:text-[170px] h1'>Aeris<span className='text-[#FCD043] h1'>Hotel</span></h1>
            <h5 className='text-[#FCD043] text-[12px] lg:text-[18px] uppercase'>rooms // restaurant // congress hall // wine bar</h5>
          </div>
          <div className="mr-[100px] hidden lg:block">
            <Chip />
            <p className='pt-[70px] text-[16px] text-[#FFFCF6]'>The luxurious hotel in the most beautiful <br /> European city with an exclusive restaurant, <br /> conference-hall, and art-bar.</p>
          </div>
        </div>
        <div className="main-bg w-[355px] md:w-[768px] lg:w-[1024px] xl:w-[1400px] mx-[auto] h-[588px]">
          <button className='bg-[#FCD043] opacity-85 border border-[1px] border-[#FCD043] h-[125px] w-[370px] text-[18px] text-[black] no-underline uppercase ml-[1030px]'><Link className='text-[18px] text-[black] no-underline uppercase' to='/booking'>book room</Link></button>
        </div>
        <div className="py-[50px]">
          <h5 className='text-[#FFFCF6] uppercase text-center text-[12px] lg:text-[26px] text-right'>Art & Congress <br /> <span className='italic'>hall</span></h5>
        </div>
      </div>
    </main>
  )
}

export default Main