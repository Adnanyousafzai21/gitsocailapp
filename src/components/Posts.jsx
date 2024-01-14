import React, { useEffect, useState } from 'react'
import Profile from '../pages/Profile'

import PostComments from './PostComments'
import ProfileTitle from './ProfileTitle'
import PostDeletUpdate from './PostDeletUpdate'
import Editpost from './Editpost'

const Posts = ({ pupdate }) => {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        getData()
    }, [pupdate])
    const getData = async () => {
        try {
            const response = await fetch("/api/v1/posts/getPosts")
            if (response.ok) {
                const postData = await response.json()
                setData(postData.posts.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full  bg-customwhite rounded-md my-2 py-2 px-5  '>
            {
                data && data?.reverse().map((data) => {
                    return <div className='flex flex-col gap-2 my-3' key={data._id}>
                        <div className="flex justify-between"><ProfileTitle avater={data.user?.avater} fullname={data?.user?.fullname} time={data?.createdAt} />
                         <PostDeletUpdate postId={data._id}  /></div>
                        <p className={`px-1 text-[#333333] text-sm descrition ${!data?.file ? "bg-sky-300 w-full flex items-center justify-center rounded-md  py-2 text-center text-customwhite min-h-36 max-h-48 overflow-hidden" : ""} `}>{data?.description}</p>
                        <div>
                            {data?.file ? (
                                data.file.includes('/video/') ? (
                                    <video controls className='rounded h-64 w-full mb-2'>
                                        <source src={data.file} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={data.file} alt="" className='rounded h-64 w-full' />
                                )
                            ) : null} </div>
                        <div className='mt-[-5]'>
                            <PostComments comments={data?.comments} />
                        </div>
                         </div>
                  
                })
            }
        </div>
    )
}

export default Posts
