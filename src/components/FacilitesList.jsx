import React from 'react'
import FacilitesCard from './FacilitesCard'
import Ice from '../assets/ice.png'
import Conference from '../assets/conference.jpg'
import Winebar from '../assets/winebar.jpg'

const data = [
    {
        id: '01',
        title: "Ice Restaurant",
        text: 'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.',
        image: Ice,
    },
    {
        id: '02',
        title: "Conference Hall",
        text: "The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Conference hall. Author’s menu, extensive wine card, and live music will set you for the correct mood.",
        image: Conference,
    },
    {
        id: '03',
        title: "Wine bar “reserve”",
        text: "The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Wine Bar. Author’s menu, extensive wine card, and live music will set you for the correct mood.",
        image: Winebar ,
    }
]

const FacilitesList = () => {
    return (
        <div className="flex flex-col justify-center gap-[100px]">
            {data.map((card, index) => (
                <FacilitesCard
                    key={index}
                    id={card.id}
                    title={card.title}
                    text={card.text}
                    image={card.image}
                />
            ))}
        </div>
    )
}

export default FacilitesList