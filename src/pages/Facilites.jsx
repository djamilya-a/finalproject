import React from 'react'
import Lobby from '../assets/lobby.png'
import Hall1 from '../assets/hall1.png'
import Open from '../assets/Open.png'
import Dining from '../assets/dining.png'

const Restaurant = () => {
  return (
    <section className='bg-[#313F38]'>
      <div className="h-[1px] bg-[#3F5148]"></div>
      <div className="w-[1400px] mx-auto py-[50px]">
        <h1 className='text-[#FCD043] text-[125px]'>“Safe” restaurant</h1>
        <div className="flex justify-between items-start my-[100px]">
          <h3 className='text-[#FFFCF6] text-[50px] capitalize'>One of a Kind</h3>
          <p className='text-[#FFFCF6] text-[18px] mr-[150px]'>Aeris Hotel proudly welcomes you to the <br /> Safe Restaurant, a place where you will <br /> wish you could dine every day. The <br /> restaurant offers a unique menu developed <br /> by the team of professionals led by chef <br /> Mary-Ann Jones, the wine list with more <br /> than 250 items, the outstanding service, <br /> and the unforgettable atmosphere.</p>
        </div>
        <div className="flex justify-between items-start">
          <img src={Lobby} alt="" />
          <img src={Hall1} alt="" />
        </div>
        <div className="my-[70px]">
          <h4 className='text-[36px] text-[#FFFCF6]'>At your service</h4>
          <p className='pt-[30px] text-[#FFFCF6] text-[18px]'>The team of the Safe Restaurant aims to exceed all <br /> expectations of our guests. Our chef worked hard to <br /> develop a unique menu that features the best meals of <br /> the European cuisine that will match the <br /> tastes of the most demanding clients. Friendly and attentive waiters <br /> will ensure that you will enjoy your time in our <br /> restaurant.</p>
        </div>
        <h3 className='ml-[600px] text-[50px] text-[#FFFCF6] leading-none h3'>Once you try our cuisine and <br /> service, you shall never want <br /> to visit another restaurant.</h3>
        <div className="flex justify-between items-start my-[100px]">
          <div className="flex flex-col gap-[50px]">
            <img className='h-[450px] w-[335px]' src={Open} alt="" />
            <h6 className='text-[#FCD043] text-[18px] uppercase'>All room decoration was made <br /> with ecological certified and <br /> safe materials.</h6>
          </div>
          <div className="flex flex-col gap-[50px]">
            <img className='h-[450px] w-[810px]' src={Dining} alt="" />
            <h4 className='text-[36px] text-[#FFFCF6] leading-none pt-[10px]'>Spend Your Time With Us</h4>
            <p className='text-[#FFFCF6] text-[18px]'>If you are looking for an exclusive place to have a <br /> romantic dinner, organize a business meeting, or <br /> spend an enjoyable evening with friends, visit Safe <br /> Restaurant in Aeris Hotel. With our delicious meals, <br /> unique interior design, and atmosphere of comfort and <br /> exquisiteness you shall never want to go to a different <br /> restaurant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restaurant