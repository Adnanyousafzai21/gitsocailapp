import React, { useState } from 'react'
import Stories from './Stories'
import Home from '../pages/Home'
import Features from './Features'
import Pages from './Pages'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Profile from '../pages/Profile'

const Main = ({ children }) => {
  const isDesktopOrTablet = useMediaQuery({ maxWidth: 500 });

  const location = useLocation()

  return (
    <div className=' max-w-[900px]  flex flex-col bg-slate-200  gap-5 items-center md:items-start  md:flex-row m-auto  justify-center'>
      <div className={`md:w-[25%]   border w-[95%] hidden md:block sticky top-14  `}>
        <Profile />
      {/* <Stories/> */}
        </div>
      <div className='md:w-[40%]  w-[95%] border py-2'>{children}</div>
      <div className='md:w-[25%] w-[95%]  sticky top-14 py-2 hidden md:block '>
        <Features />
      </div>
    </div>
  )
}

export default Main
