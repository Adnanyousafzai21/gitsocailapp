import React from 'react'
import ProfileTitle from './ProfileTitle'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import StoriesDashboard from './StoriesDashboard';
const Stories = () => {
    const [data, setData] = useState([])
    const deletePost = (postId) => {

    }
    useEffect(() => {

        getData()
    }, [])
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
        <div className='w-full  bg-slate-200  rounded  md:sticky top-12  h-48 overflow-y-auto  flex-row flex md:flex-col scrollbar'>
            {/* <StoriesDashboard className="w-[30%]" /> */}

            {
                data && data?.reverse().map((data) => {
                    return <div className='flex md:flex-col flex-row  gap-2 my-1 relative' key={data._id}>
                        <div className="flex justify-between items-center px-1 flex-col md:flex-row mt-1  w-full  absolute">
                            <ProfileTitle avater={data.user?.avater} time={data?.createdAt} className="md:block hidden" />
                            <div title='Delete' className='text-red-500 mr-0'>
                                <MdOutlineDeleteOutline onClick={() => deletePost(postId)} />
                            </div>
                          
                        </div>
                        <div>
                            <div className={`w-full flex items-center justify-center rounded-md  font-light text-customwhite  px-2 py-5 pt-9 ${!data?.file ? "bg-sky-300 w-full static" : "absolute"} `}>
                            <p className='h-24   overflow-hidden' >{data?.description}</p>
                          
                            </div>
                       
                            {data?.file ? (
                                data.file.includes('/video/') ? (
                                    <video controls className=' h-36 rounded w-full mb-2'>
                                        <source src={data.file} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={data.file} alt="" className='rounded h-32 w-full' />
                                )
                            ) : null} 
                            </div>
                    </div>

                })
            }
        </div>
    )
}

export default Stories
