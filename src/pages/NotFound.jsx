import React from 'react'
import { Link } from 'react-router-dom'
import GppBadIcon from '@mui/icons-material/GppBad';

const NotFound = () => {
  return (

    <section className='bg-[#313F38] flex flex-col justify-center items-center gap-[30px] py-[100px]'>
        <GppBadIcon sx={{ fontSize: 150 }} className='text-[#FCD043] error' />
      <h4 className='text-[#FFFCF6] text-[65px] text-center uppercase'>This page does <br /> not exist</h4>
      <button className='bg-[#FCD043] opacity-85 border border-[1px] border-[#FCD043] h-[100px] w-[300px]'><Link className='text-[18px] text-[black] no-underline uppercase' to='/'>return</Link></button>
    </section>
  )
}

export default NotFound