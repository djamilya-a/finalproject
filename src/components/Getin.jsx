import React from 'react'
import Star from '../assets/star.png'
import Getintouch from '../assets/getintouch.png'
import Vector2 from '../assets/vector2.png'
import { Link } from 'react-router-dom';

const Getin = () => {
    return (
        <section className='bg-[#FFFCF6] pt-[150px] pb-[70px]'>
            <div className="w-[100%] lg:w-[1024px] xl:w-[1400px] mx-[auto]">
                <img className='hidden lg:block vector' src={Vector2} alt="" />
            </div>
            <div className="w-[1400px] mx-auto">
                <div className="hidden lg:block">
                    <div className="flex justify-between w-[1305px] items-start">
                        <div className="flex justify-start gap-[35px] items-center">
                            <h2 className='text-[250px] text-[#1B3B36] uppercase get-in leading-none'>get in</h2>
                            <img className='pb-[30px]' src={Star} alt="" />
                        </div>
                        <img className='nidden lg:block pt-[10px]' src={Getintouch} alt="" />
                    </div>
                    <h2 className='text-[250px] text-[#FCD043] uppercase get-in leading-none text-right touch'>touch</h2>
                </div>
                <div className="w-[740px] flex items-center justify-between mt-[30px]">
                    <div className="hidden lg:flex h-[125px] w-[370px] h4 items-center justify-center gap-[15px] bg-[#FCD043]">
                        <h4 className='uppercase'><Link className='text-[20px] text-[#313f38] no-underline uppercase' to='/rooms'>find a room</Link></h4>

                    </div>
                    <button className='bg-[#313F38] border border-[1px] border-[#313F38] h-[125px] w-[370px]'><Link className='text-[20px] text-[#FFFCF6] no-underline uppercase' to='/booking'>book room</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Getin