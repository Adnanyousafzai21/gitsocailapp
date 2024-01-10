import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full bg-white text-sky-500  sticky top-0 z-30'>
            <div className='max-w-[800px]  mx-auto '>
                <div className='flex'>
                    <div className="">
                        <img src="" alt="" /></div>
                    <ul className='flex flex-row  gap-5 '>
                        <li className='my-2'>
                            <Link to="/" className="py-2 px-4">Home</Link>
                        </li>
                        {/* <li className='my-2'>
                            <Link to="/yourpost" className="py-2 px-4">yourPost</Link>
                        </li> */}
                        <li className='my-2'>
                            <Link to="/profile" className="py-2 px-4">Profile</Link>
                        </li>
                        <li className='my-2'>
                            <Link to="/login" className="py-2 px-4">LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
