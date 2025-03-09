import React from 'react'
import Chip from './Chip'

const RoomsCard = ({image1, image2, name, description}) => {
  return (
    <div className="flex justify-between items-start">
      <img className='hidden lg:block w-[215px] h-[260px] object-cover' src={image1} alt="" />
      <div className="flex flex-col justify-start items-center gap-[200px] w-[335px]">
        <h3 className='text-[#1B3B36] text-[30px] lg:block text-[40px] leading-none'>{name}</h3>
        <p className='text-[#1B3B36] text-[13px] lg:block text-[22px]'>{description}</p>
      </div>
      <img className='hidden lg:block w-[570px] h-[700px] object-cover' src={image2} alt="" />
    </div>
  )
}

export default RoomsCard