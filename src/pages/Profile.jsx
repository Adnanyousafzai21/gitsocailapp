import React from 'react'
import Profileimg from '../components/Profileimg'
import GetYourPost from '../components/YourPostpost'
import Main from '../components/Main'
import ProfileTitle from '../components/ProfileTitle'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("User"))
  const data = JSON.parse(localStorage.getItem("User"))
  const User = data?.user ? data?.user : ""

  return (
    <>

      <div className="w-full m-auto h-full my-2 ">
        <div className="max-w-[300px] m-auto rounded-md   bg-white ">
          {user ?
            <div className='w-full  flex flex-col justify-center items-center gap-5 '>
              <div className='w-full bg-sky-100 rounded h-28 '></div>
              <div className='w-[25%] mt-[-60px] ml-[-50px] '>
                <div className=' z-1  rounded-full overflow-hidden w-20 h-20 border border-sky-400'>
                  <Profileimg avater={User.avater} classname='w-20 h-20' />
                </div>
              </div>
              <div className='px-3 text-center'>
                <div className='capitalize'>{User.fullname}</div>
                <div className=''>{User.email}</div>
                <div className='text-sm text-sky-300 font-thin'>pass has been hidden</div>
              </div>
              <div className=''>
                <button className='rounded bg-sky-400 px-10 py-1 text-white  mb-3'>
                  Edit Your Profile </button>
              </div>
              {/* <div className='w-full px-3'>
                <GetYourPost />
              </div> */}
            </div>

            :
            <div className='p-5 '>
              <h1 className='text-sky-700 font-bold'>You are not register yet</h1>
              <p className='text-sky-500  my-3 text-center text-sm'>
                 
                please register yourself so that you will be able to share post, comment, like, and other activities
               <p className='text-red-400'> Profile will be showing here only you can see your porfile don't worry!!</p>
               <p className='text-sky-500'>you can delete, update your  post and  comment </p>
              </p>
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
