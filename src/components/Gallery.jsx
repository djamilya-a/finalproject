import React from 'react'
import Logo from '../assets/Aeris-logo.png'
import Mirror from '../assets/mirror.png'
import Bar from '../assets/bar.png'
import Space from '../assets/space.png'
import Hall from '../assets/hall.png'
import Marker from '../assets/marker.png'
import Toilet from '../assets/toilet.png'

const Gallery = () => {
    return (
        <section className='hidden lg:block bg-[#313F38] py-[100px] w-[100%]'>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <img className='rounded-[50%] opacity-95 w-[85px]' src={Logo} alt="" />
                <h2 className='text-[#FCD043] text-[105px] uppercase'>our gallary</h2>
            </div>
            <div className="flex items-start justify-between pt-[30px]">
                <img src={Mirror} alt="" />
                <p className='text-[18px] text-[#FFFCF6] text-center'>Explore our spacious rooms with the gorgeous view to <br /> the historical part of the city. Each room has an <br /> exclusive interior design decorated with modern art <br /> pieces that will make your stay unforgettable. </p>
                <img src={Bar} alt="" />
            </div>
            <div className="flex justify-between items-end w-[1065px] pt-[10px]">
                <img src={Hall} alt="" />
                <img className='space' src={Space} alt="" />
            </div>
            <div className="flex items-start justify-between ml-[375px] pt-[15px]">
                <div className="flex items-center justify-start gap-[15px]">
                    <img src={Marker} alt="" />
                    <h6 className='text-[22px] text-[#FFFCF6]'>It is our pleasure to meet your most <br /> unrealistic expectations.</h6>
                </div>
                <img src={Toilet} alt="" />
            </div>
        </section>
    )
}

export default Gallery