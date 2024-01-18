import React, { useEffect, useState } from 'react'

import PostComments from './PostComments'
import ProfileTitle from './ProfileTitle'
import PostDeletUpdate from './PostDeletUpdate'
import { BsThreeDotsVertical } from "react-icons/bs";
const Posts = ({ pupdate,setUpdate }) => {
    const user = JSON.parse(localStorage.getItem("User"))
    const userId = user.user._id
  
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        getData()
    }, [pupdate])
    const getData = async () => {
        try {
            const response = await fetch("https://socailmediaappapi.vercel.app/api/v1/posts/getPosts")
            if (response.ok) {
                const postData = await response.json()
                setData(postData.posts.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full '>
            {
                data && data?.map((data) => {
                    return <div className='flex flex-col p-5 rounded bg-customwhite my-2' key={data._id}>
                        <div className="flex justify-between"><ProfileTitle avater={data.user?.avater} fullname={data?.user?.fullname} time={data?.createdAt} />
                            {data?.user._id === userId ? <PostDeletUpdate postId={data._id} setUpdate={setUpdate}  /> : <BsThreeDotsVertical title="This is not your post you cann't either delete or edit!!"
                            />}   </div>
                        <p className={`px-2 text-[#333333] text-sm descrition ${!data?.file ? "bg-sky-300 w-full  my-3 flex items-center justify-center rounded  py-2 text-center text-customwhite min-h-36 max-h-48 overflow-hidden" : "mt-3"} `}>{data?.description}</p>
                        <div>
                            {data?.file ? (
                                data.file.includes('/video/') ? (
                                    <video controls className='rounded h-64 w-full my-2'>
                                        <source src={data.file} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={data.file} alt="" className='rounded h-64 w-full my-3' />
                                )
                            ) : null} </div>
                        <div className=''>
                            <PostComments comments={data?.comments} setUpdate={setUpdate} postId={data._id}/>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Posts
