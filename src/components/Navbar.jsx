import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profileimg from './Profileimg'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({data}) => {
    const [isOpen, setIsOpen]= useState(false)
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
            <div className=' max-w-[900px]   py-3 mx-auto '>
                <div className='flex justify-between  px-5 relative'>
                    <div className="">
                        <Profileimg />
                    </div>
                    <ul className={` px-20 md:px-0 lg:pl-0 duration-500 text-center lg:flex absolute lg:static lg:justify-center lg:mt-auto ${isOpen?'mt-[60px] opacity-[100%]':'mt-[-200px] opacity-0 '} itmes-center w-full left-0 gap-10  lg:gap-3 bg-white z-[10] py-5 lg:py-0 pl-11  lg:mt-auto lg:flex-row lg:w-auto lg:opacity-100 `}>
                    <li className={`my-2 ${isOpen?"hover:bg-sky-500 hover:text-white":""}  duration-500  width-[50%] mx-auto`}>
                            <Link to="/" className="py-2 ">Home</Link>
                        </li>
                        <li className={`my-2 ${isOpen?"hover:bg-sky-500 hover:text-white":""}   duration-500 md:hover:bg-none width-[50%] mx-auto`}>
                            <Link to="/profile" className="py-2 ">Profile</Link>
                        </li>
                        <li className={`my-2 ${isOpen?"hover:bg-sky-500 hover:text-white":""}   duration-500 md:hover:bg-none width-[50%] mx-auto`}>
                            <Link to="/about" className="py-2 ">AboutUs</Link>
                        </li>
                        {!user ? (<li className={`my-2 ${isOpen?"hover:bg-sky-500 hover:text-white":""}   duration-500 md:hover:bg-none width-[50%] mx-auto`}>
                            <Link to="/login" className="py-2 ">LogIn</Link>
                        </li>)
                            : (<li className={`my-2 ${isOpen?"hover:bg-sky-500 hover:text-white":""}  duration-500 md:bg-none width-[50%] mx-auto`} onClick={handleLogout}>
                                <Link to="/logout" className="py-2 ">logout</Link>
                            </li>)}
                    </ul>
                    <div className='text-sky-500 md:hidden text-3xl mt-2'>
                {isOpen?<RxCross2   onClick={()=>setIsOpen((open)=>!open)}/>:<IoReorderThreeOutline onClick={()=>setIsOpen((open)=>!open)}  />    }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar
