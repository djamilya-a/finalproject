import React from 'react'
import Chip from '../components/Chip'
import Room from '../assets/room.png'
import Label from '../assets/label1.png'
import Broom from '../assets/broom.png'
import Bath from '../assets/bath.png'
import { Link } from 'react-router-dom'

const Rooms = () => {
  return (
    <>
      <section className='bg-[#313F38]'>
        <div className="room h-[675px]">
          <div className="w-[1400px] mx-auto">
            <h2 className='text-[125px]/[150px] text-[#FCD043] pt-[50px]'>Celestial <br />Suite</h2>
            <p className='text-[20px] text-[#FCD043] uppercase mt-[100px] font-bold'>All room decoration was made <br /> with ecological certified and <br /> safe materials.</p>
          </div>
        </div>
        <div className="w-[1200px] mx-auto pt-[170px]">
          <Chip />
          <div className="flex justify-between items-start py-[70px]">
            <h4 className='text-[#FFFCF6] text-[50px] description'>All suites have a unique design <br /> because we want our every <br /> guest to feel special.</h4>
            <p className='text-[#FFFCF6] text-[18px]'>The Celestial Suite would perfectly match <br /> the needs of those who plan to stay long. <br /> The bright and airy room is equipped with <br /> superior soft Italian furniture. Large <br /> windows open a beautiful view to the <br /> historical part of the city. Contemporary <br /> interior design and comfortable beds will <br /> make your stay cozy and delightful.</p>
          </div>
          <div className="pt-[70px]">
            <h6 className='text-[40px] text-[#FCD043] capitalize'>Premier Standard</h6>
            <img className='pt-[30px] w-[1200px]' src={Room} alt="" />
          </div>
        </div>
      </section>
      <section className='bg-[#FFFCF6]'>
        <div className="w-[1200px] mx-auto pt-[100px]">
          <img className='logo1' src={Label} alt="" />
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[50px] items-start justify-start label1">
              <img src={Bath} alt="" />
              <h4 className='text-[#1B3B36] text-[36px] leading-none'>Celestial Suite</h4>
              <p className='text-[18px] text-[#1B3B36]'>All rooms in Aeris Hotel have a special <br /> charm achieved through a combination of <br /> modern functional design and original 20th <br /> century layout.  </p>
            </div>
            <div className="flex flex-col gap-[40px] items-start justify-start">
              <img src={Broom} alt="" />
              <p className='text-[#1B3B36] text-[18px]'>The Celestial Suite includes two functional zones: a <br /> living room with the best Italian furniture, and an <br /> isolated cozy bedroom with a large bed. Here, you will <br /> find space both for work and comfortable rest. Hotel <br /> offers supreme comfort and outstanding 24-hour room <br />
               service to make sure that the time you spend here is <br /> enjoyable and pleasant.</p>
            </div>
          </div>
          <button className='mt-[70px] w-[250px] h-[70px] border border-[1px] border-[#313F38] text-[26px] rounded-[99px] bg-[#FFFCF6]'><Link className='text-[#1B3B36] no-underline uppercase' to='/booking'>book room</Link></button>
        </div>
      </section>
    </>
  )
}

export default Rooms