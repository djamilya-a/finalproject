import React from 'react'
import InfoImg from '../assets/info-img.png'
import AboutImg from '../assets/infoimg.png'
import Label from '../assets/Aeris-logo.png'
import Border from '../assets/border.png'
import Vector1 from '../assets/vector1.png'

const Info = () => {
  return (
    <section className='bg-[#313F38]'>
      <div className="h-[1px] bg-[#3F5148]"></div>
      <div className="w-[100%] mx-[auto] lg:w-[1024px] mx-[auto] flex justify-between items-center xl:w-[1400px] mx-[auto] flex justify-between items-center">
        <div className="w-[100%] flex flex-col gap-[30px] lg:block">
          <div className="hidden lg:flex flex-col items-end info-content">
            <h2 className='text-[#FCD043] text-[140px] h2'>About</h2>
            <h2 className='text-[#FFFCF6] text-[140px] span h2'>Us</h2>
          </div>
          <div className="flex justify-between items-end">
            <img className='hidden lg:block' src={InfoImg} alt="" />
            <div className="">
              <h4 className='text-[36px] text-[#FFFCF6] mb-[40px]'>High quality</h4>
              <p className='text-[18px] text-[#FFFCF6]'>The five-star Aeris Hotel was reopened to visitors <br /> in 2016. The building was renovated and <br /> modernized to meet the expectations of the most <br /> demanding guests. We offer luxurious rooms, <br /> numerous facilities, and exceptional service. </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[1px] h-[940px] bg-[#3F5148]"></div>
        <div className="hidden lg:flex w-[345px] flex-col items-center gap-[170px]">
          <div className="ml-[50px] about">
            <img className='rounded-[50%] opacity-70 -mb-[10px] ml-[50px] w-[30px]' src={Label} alt="" />
            <img className='w-[250px]' src={AboutImg} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Border} alt="" />
            <div className="inside flex flex-col justify-between items-center gap-[13px]">
              <h6 className='text-[20px] text-[#FFFCF6]'>Our rooms</h6>
              <img src={Vector1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info