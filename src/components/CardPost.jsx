import React from 'react'
import PostComments from './PostComments'
import ProfileTitle from './ProfileTitle'
import { BsThreeDotsVertical } from "react-icons/bs";
import PostDeletUpdate from './PostDeletUpdate'
const CardPost = ({id, time, file, description, comments, avater , user_id, fullname, setUpdate}) => {
const user = JSON.parse(localStorage.getItem("User"))
    const userId = user && user.user._id
    return (
        <div className='w-full '>
            <div className='flex flex-col rounded bg-customwhite my-2' key={id}>
                <div className="flex justify-between px-5"><ProfileTitle avater={avater} fullname={fullname} time={time} />
                    {user_id === userId ? <PostDeletUpdate postId={id} setUpdate={setUpdate} /> : <BsThreeDotsVertical title="This is not your post you cann't either delete or edit!!"
                    />}   </div>
                <p className={`px-7 text-[#333333] text-sm descrition ${!file ? "bg-sky-300 w-full  my-3 flex items-center justify-center rounded  py-2 text-center text-customwhite min-h-36 max-h-48 overflow-hidden" : "mt-3"} `}>{description}</p>
                <div>
                    {file ? (
                        file.includes('/video/') ? (
                            <video controls className='rounded h-64 w-full my-2'>
                                <source src={file} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={file} alt="" className='h-64 w-full my-3' />
                        )
                    ) : null} </div>
                <div className='px-5'>
                    <PostComments comments={comments} setUpdate={setUpdate} postId={id} />
                </div>
            </div>
        </div>
    )
}

export default CardPost
