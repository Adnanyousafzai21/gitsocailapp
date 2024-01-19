import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profileimg from './Profileimg'
const Navbar = ({data}) => {
   const Navigate = useNavigate()
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('User')));
  const handleLogout = () => {
    localStorage.removeItem('User');
    Navigate("/")
    setUser(null);
  };
    useEffect(() => {
            setUser(JSON.parse(localStorage.getItem('User')));
      }, [data]);
    return (
        <div className='w-full bg-customwhite text-sky-500 px-3 md:px-0 sticky top-0 z-30'>
            <div className='max-w-[750px]  py-3 mx-auto '>
                <div className='flex justify-between px-5'>
                    <div className="">
                        <Profileimg />
                    </div>
                    <ul className='flex flex-row md:gap-10 gap-5 px-3 '>
                        <li className='my-2'>
                            <Link to="/" className="py-2 ">Home</Link>
                        </li>
                        <li className='my-2'>
                            <Link to="/profile" className="py-2 ">Profile</Link>
                        </li>
                        <li className='my-2'>
                            <Link to="/about" className="py-2 ">AboutUs</Link>
                        </li>
                        {!user ? (<li className='my-2'>
                            <Link to="/login" className="py-2 ">LogIn</Link>
                        </li>)
                            : (<li className='my-2' onClick={handleLogout}>
                                <Link to="/logout" className="py-2 ">logout</Link>
                            </li>)}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
