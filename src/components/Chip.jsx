import React from 'react'
import Star from '../assets/stap.png'

const Chip = () => {
  return (
    <div className="w-[250px] border border-[1px] border-[#FFFCF6] rounded-[100px] py-[13px] flex justify-evenly items-center">
        <img src={Star} alt="" />
        <h4 className='text-[22px] text-[#FFFCF6]'>since 1973</h4>
    </div>
  )
}

export default Chip