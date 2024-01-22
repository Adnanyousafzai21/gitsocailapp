import React from 'react'
import Profileimg from '../components/Profileimg'
import { Link, useLocation } from 'react-router-dom'
import YourPost from '../components/YourPost'

const Profile = (setUpdate) => {
  const location= useLocation()
  const path = location.pathname
  const user = JSON.parse(localStorage.getItem("User"))
  const data = JSON.parse(localStorage.getItem("User"))
  const User = data?.user ? data?.user : ""

  return (
    <>
      <div className="w-full m-auto h-full my-2 ">
        <div className="max-w-[350px] m-auto rounded-md   bg-white ">
          {user ?
            <div className='w-full  flex flex-col justify-center items-center gap-5 '>
              <div className='w-full bg-sky-200 h-28 '>
                <p className='text-center text-white pt-3'>Your Profile</p>
              </div>
              <div className='w-[25%] mt-[-60px]  '>
                <div className=' z-1  rounded-full overflow-hidden w-20 h-20 border border-white'>
                  <Profileimg avater={User.avater} classname='w-20 h-20' />
                </div>
              </div>
              <div className='px-3 text-center'>
                <div className='capitalize'>{User.fullname}</div>
                <div className=''>{User.email}</div>
                <div className='text-sm  font-thin'>password has been hidden</div>
              </div>
              <div className='mb-3'>
                <Link to={`/porfileEdit/${User._id}`} className='rounded bg-sky-400 px-10 py-1 text-white text-sm  mb-3'>
                  Edit Your Profile </Link>
              </div>
              <div className='w-full h-2 bg-slate-50'></div>
             {path=="/profile" && <div className='w-full'>
                <YourPost setUpdate />
              </div>}
            </div>

            :
            <div className='p-5 '>
              <h1 className='text-sky-700 font-bold'>You are not register yet</h1>
              <p className='text-sky-500  my-3 text-center text-sm'>
                 
                please register yourself so that you will be able to share post, comment, like, and other activities  </p>
               <p className='text-red-400'> Profile will be showing here only you can see your porfile don't worry!!</p>
               <p className='text-sky-500'>you can delete, update your  post and  comment </p>
            
              <div className='text-center'>
                <Link to="/login" className='text-sky-500 underline'>Login here</Link>
              </div>

            </div>}
        </div>
      </div>

    </>
  )
}

export default Profile
