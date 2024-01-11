import React from 'react'
import { Link } from 'react-router-dom'
import Profileimg from './Profileimg'
const Navbar = () => {
    return (
        <div className='w-full bg-white text-sky-500 px-3 md:px-0 sticky top-0 z-30'>
            <div className='max-w-[750px]  py-3 mx-auto '>
                <div className='flex justify-between'>
                    <div className="">
                        <Profileimg />
                    </div>
                    <ul className='flex flex-row  md:gap-5  gap-2'>
                        <li className='my-2'>
                            <Link to="/" className="py-2 ">Home</Link>
                        </li>
                        {/* <li className='my-2'>
                            <Link to="/yourpost" className="py-2 ">yourPost</Link>
                        </li> */}
                        <li className='my-2'>
                            <Link to="/profile" className="py-2 ">Profile</Link>
                        </li>
                        <li className='my-2'>
                            <Link to="/login" className="py-2 ">LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
