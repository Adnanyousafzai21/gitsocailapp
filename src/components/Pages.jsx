import React, { children } from 'react'

const Pages = ({children}) => {
  return (
    <div className='bg-white px-4 py-3 w-[40%]'>
        this is childerm
        {children}
      
    </div>
  )
}

export default Pages
