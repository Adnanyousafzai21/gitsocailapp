import React, { useEffect, useState } from 'react'
import ProfileTitle from './ProfileTitle'
import PostDeletUpdate from './PostDeletUpdate'
import PostComments from './PostComments'
const GetYourPost = () => {
    const [posts, setPosts] = useState([])
  
console.log(posts)
    const getYourPost = async () => {

        try {
            const response = await fetch(`http://localhost:8000/api/v1/posts/getYourPost/659d612a662a0da1dbaab445`)

            const yourpost = await response.json()
            setPosts(yourpost.yourPosts)
            console.log(yourpost.yourPosts)

         
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getYourPost()
    }, [])
    return (
        <>
            <div className='w-full  bg-white rounded-md '>
                <h1 className='text-center text-sky-500 my-2'>Your Posts</h1>
                {
                 posts  && posts.map((yourposts) => {
                        return <div className='w-full flex flex-col gap-2 mt-3 '>
                            <div className='flex justify-between '>
                                <div className="flex">
                                    {/* <ProfileTitle /> */}
                                </div>
                                <div>
                                    <PostDeletUpdate />
                                </div>
                            </div>
                            <p className={`py-2 px-3 ${!yourposts?.file? "bg-sky-300 w-full flex items-center justify-center rounded-md  py-2 text-center text-white min-h-24 max-h-40 overflow-hidden":""}`}>{yourposts.description}</p>
                            <div className=''>
                                {yourposts?.file ? (
                                    yourposts.file.includes('/video/') ? (
                                        <video controls className='rounded  h-64 w-full'>
                                            <source src={yourposts.file} />
                                        </video>
                                    ) :
                                        <img src="" alt="" className='w-full rounded-md ' />
                                ) : null}
                            </div>

                            <div className='w-full'>
                                <PostComments />
                            </div>
                        </div>
                    })
                }



            </div>

        </>
    )
}

export default GetYourPost
