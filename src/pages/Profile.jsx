import React from 'react'
import Profileimg from '../components/Profileimg'
import GetYourPost from '../components/YourPostpost'
import Main from '../components/Main'
import ProfileTitle from '../components/ProfileTitle'

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("User"))
  const User = data.user
  return (
    <Main>
      <div className="w-full m-auto h-full">
        <div className="w-full m-auto rounded-md  bg-white  flex flex-col justify-center items-center gap-12 ">
          <div className='w-full bg-slate-700 rounded h-28'>codver IMG</div>
          <div className='w-[25%] mt-[-95px] relative '>
            <div className='absolute z-1  rounded-full overflow-hidden w-20 h-20 border border-sky-400'>
              <img src={User.avater} />
            </div>
            <div className=' z-40 mt-6 relative ml-16' >edit</div>
          </div>
          <div className='px-3'>
             <div className='capitalize'>{User.fullname}</div>
            <div className=''>{User.email}</div>
           
          </div>
          <div className='mt-[-25px]'>
            <button className='w-full rounded bg-sky-400 px-10 py-1 text-white '>
              Edit Your Profile </button>
          </div>
          <div className='w-full px-3'>
            <GetYourPost />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Profile
