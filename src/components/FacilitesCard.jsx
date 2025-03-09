import React from 'react'

const FacilitesCard = ({ id, title, text, image }) => {
  return (
    <>
    <div className="flex justify-around items-center">
      <div className="w-[335px] flex flex-col justify-center items-start gap-[30px]">
        <h3 className='text-[50px] text-[#1B3B36] mb-[30px]'>{id}</h3>
        <h3 className='text-[50px] text-[#1B3B36] leading-none'>{title}</h3>
        <p className='text-[18px] text-[#1B3B36]'>{text}</p>
      </div>
      <img className='w-[450px] h-[640px] object-cover' src={image} alt="" />
    </div>
    <div className="h-[0.5px] w-[100%] bg-[#313F38]"></div>
    </>
  )
}

export default FacilitesCard