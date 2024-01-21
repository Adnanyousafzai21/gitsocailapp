import React, { useState } from 'react'
import Profileimg from '../components/Profileimg'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import ProfilePost from './Porfilepost'


const Otherprofile = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("User"))
    const userid = user && user._id
    const params = useParams()
    const [prodata, setProdata] = useState({
        avater: "",
        fullname: ""
    })
    const { userId } = params
    return (
        <>
        {
            userId===userid? navigate("/profile")
            :
            <div className="w-full m-auto h-full my-2 ">
                <div className="max-w-[300px] m-auto rounded-md   bg-white ">
                    <div className='w-full  flex flex-col justify-center items-center gap-5 '>
                        <div className='w-full bg-sky-200 h-28 '>
                            <p className='text-center text-white pt-3'>Your Profile</p>
                        </div>
                        <div className='w-[25%] mt-[-60px]  '>
                            <div className=' z-1  rounded-full overflow-hidden w-20 h-20 border border-white'>
                                <Profileimg avater={prodata.avater} classname='w-20 h-20' />
                            </div>
                        </div>
                        <div className='px-3 text-center'>
                            <div className='capitalize'>{prodata.fullname}</div>
                        </div>
                        <div className='w-full  ml-[-4]'>
                            <ProfilePost userId={userId} setProdata={setProdata} />
                        </div>
                    </div>
                </div>
            </div>
        }
            



        </>
    )
}

export default Otherprofile
