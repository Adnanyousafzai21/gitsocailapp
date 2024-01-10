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
    <div className=' max-w-[700px]  flex flex-col py-2 gap-2  md:flex-row  justify-center  items-center mx-auto'>
      <div className={`md:w-[25%] w-[90%] ${isDesktopOrTablet && location.pathname==="/profile"?"hidden":""}`}><Stories /></div>
      <div className='md:w-[40%] w-[90%]'>{children}</div>
      <div className=':md:w-[25%] w-[90%] hidden lg:block'>
        <Features />
      </div>
    </div>
  )
}

export default Main
