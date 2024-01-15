import React, { useState } from 'react'
import Stories from './Stories'
import Home from '../pages/Home'
import Features from './Features'
import Pages from './Pages'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Main = ({ children }) => {
  const isDesktopOrTablet = useMediaQuery({ maxWidth: 500 });

  const location = useLocation()

  return (
    <div className=' max-w-[900px]  flex flex-col bg-slate-200 py-2 gap-5 items-center md:items-start  md:flex-row m-auto  justify-center'>
      <div className={`md:w-[25%]  border w-[95%]
      ${isDesktopOrTablet && location.pathname === "/profile" ? "hidden" : ""} sticky top-14 md:block hidden`}>
        <Stories />
        </div>
      <div className='md:w-[40%]  w-[95%] border '>{children}</div>
      <div className='md:w-[25%] w-[95%]  hidden lg:block sticky top-14'>
        <Features />
      </div>
    </div>
  )
}

export default Main
