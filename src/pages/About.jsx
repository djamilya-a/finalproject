import React from 'react'
import InfoImg from '../assets/info-img.png'
import AboutImg from '../assets/infoimg.png'
import Label from '../assets/label.png'


const About = () => {
  return (
    <section className='bg-[#313F38]'>
      <div className="h-[1px] bg-[#3F5148]"></div>
      <div className="w-[1400px] mx-auto flex justify-between items-center">
        <div className="w-[1000px]">
          <div className="flex flex-col items-end info-content">
            <h2 className='text-[140px] text-[#FCD043] h2'>About</h2>
            <h2 className='text-[#FFFCF6] text-[140px] span h2'>Us</h2>
          </div>
          <div className="flex justify-between items-end">
            <img src={InfoImg} alt="" />
            <div className="">
              <h4 className='text-[36px] text-[#FFFCF6] mb-[40px]'>High quality</h4>
              <p className='text-[18px] text-[#FFFCF6]'>The five-star Aeris Hotel was reopened to visitors <br /> in 2016. The building was renovated and <br /> modernized to meet the expectations of the most <br /> demanding guests. We offer luxurious rooms, <br /> numerous facilities, and exceptional service. </p>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[940px] bg-[#3F5148]"></div>
        <div className="w-[345px] info px-[80px] flex flex-col items-center gap-[170px]">
          <div className="ml-[50px] about">
            <img className='label' src={Label} alt="" />
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About