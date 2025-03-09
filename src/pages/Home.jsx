import React from 'react'
import Main from '../components/Main'
import Info from '../components/Info'
import Apartment from '../components/Apartment'
import Gallery from '../components/Gallery'
import Getin from '../components/Getin'
import Restaurant from '../components/Restaurant'
import RoomsList from '../components/RoomsList'

const Home = () => {

    return (
        <>
        <Main />
        <Info />
        <RoomsList />
        <Restaurant />
        <Apartment />
        <Gallery />
        <Getin />
        </>
    )
}

export default Home