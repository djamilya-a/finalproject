import React from 'react'
import Vector2 from '../assets/vector2.png'

const Apartment = () => {
  return (
    <section className='hidden lg:block apt h-[810px]'>
        <div className="w-[1400px] mx-auto">
            <h1 className='text-[125px] uppercase text-[#FCD043] leading-none pt-[100px]'>Best <br /> Apartments</h1>
            <p className='apt-p text-[#FCD043] text-[24px] uppercase pt-[230px] text-right'>All room decoration was made <br /> with ecological certified and <br /> safe materials.</p>
        </div>
        <img src={Vector2} alt="" className='apt-img'/>
    </section>
  )
}

export default Apartment