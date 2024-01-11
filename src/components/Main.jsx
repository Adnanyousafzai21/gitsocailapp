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
    <div className=' max-w-[750px]  flex flex-col py-2 gap-2  md:flex-row m-auto  justify-center'>
      <div className={`md:w-[25%] w-[95%] mx-auto
       ${isDesktopOrTablet && location.pathname === "/profile" ? "hidden" : ""}`}>
        <Stories /></div>
      <div className='w-[95%] md:[40%] mx-auto'>{children}</div>
      <div className=':md:w-[25%] w-[95%] hidden mx-auto lg:block'>
        <Features />
      </div>
    </div>
  )
}

export default Main
