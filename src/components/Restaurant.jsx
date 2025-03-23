import React from 'react'
import Star3 from '../assets/star3.png'
import Barman from '../assets/barman.png'
import Michael from '../assets/michael.png'
import FacilitesList from './FacilitesList'

const Restaurant = () => {
    return (
        <section className='hidden lg:block bg-[#FFFCF6] py-[100px]'>
            <div className="w-[1400px] mx-auto">

                <div className="ml-[450px] flex justify-between items-end">
                    <div className="flex flex-col items-start">
                        <h2 className='text-[125px] text-[#1B3B36] leading-none'>Our <br /> faci</h2>
                        <div className="flex justify-start items-center">
                            <img className='mx-[70px]' src={Star3} alt="" />
                            <h2 className='text-[125px] text-[#1B3B36] leading-none'>lities</h2>
                        </div>
                    </div>
                    <img src={Barman} alt="" />
                </div>

                <div className="my-[100px] flex justify-start gap-[60px] items-end">
                    <img src={Michael} alt="" />
                    <p className='text-[18px] text-[#1B3B36]'>Aeris Hotel offers you a wide range of <br /> additional services and facilities. Visit our <br /> restaurant to try exclusive meals, book a <br /> conference hall to organize a business <br /> meeting, or relax in the art-bar. </p>
                </div>

                <FacilitesList />
            </div>
        </section>
    )
}

export default Restaurant