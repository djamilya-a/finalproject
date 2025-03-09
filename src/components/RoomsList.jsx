import React from 'react'
import RoomsCard from './RoomsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const RoomsList = () => {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("https://5a37de85ea521337.mokky.dev/rooms")
            .then((response) => {
                setRooms(response.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [])


    if (loading)
        return (
            <div className='flex flex-col items-center'>
                <CircularProgress /> <p>Loading...</p>
            </div>
        );

    if (error) return <p>Error:{error}</p>

    console.log(rooms);

    return (
        <section className='bg-[#FFFCF6] py-[100px]'>
            <div className="flex justify-between items-start">
                <h2 className="text-[#1B3B36] text-[20px] lg:uppercase text-[125px] leading-[120px] pb-[100px]">rooms & <br /> apartments</h2>
                <p className="hidden lg:block text-[#1B3B36] text-[18px] uppercase">All room decoration was made <br /> with ecological certified and <br /> safe materials.</p>
            </div>
            <div className="w-[1440px] mx-auto">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#313F38',
                        '--swiper-pagination-color': '#313F38',
                    }}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    className="mySwiper">

                    {rooms[0].rooms.map((data, index) => {
                        return (
                            <SwiperSlide>
                                <RoomsCard
                                    key={index}
                                    name={data.name}
                                    image1={data.image1}
                                    image2={data.image2}
                                    description={data.description}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default RoomsList