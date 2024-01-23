import React, { useState } from 'react'
import { FaRegComment } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import Profileimg from './Profileimg'; import { BiSolidLike } from "react-icons/bi";
import ProfileTitle from './ProfileTitle';
import { BiLike } from 'react-icons/bi';
import { TiDeleteOutline } from "react-icons/ti";
import Modalmessage from './Modal';
const PostComments = ({ comments, setUpdate, postId, likes }) => {
    const user = JSON.parse(localStorage.getItem("User"))
    const userId = user && user.user._id
    const [hide, setHide] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [liked, setLiked]= useState(false)
    const deletcomment = async (commentId) => {
        try {


            const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/deleteComment/${postId}/${commentId}`, {
                method: "delete"
            })
            if (response.ok) {
                console.log("the comments id deleted succesfully")
                setUpdate((preve) => !preve)
            }
        } catch (error) {
            console.log("there is error while deleting ")
        }

    }
    const [comment, setComment] = useState("")

    const postCommet = async () => {
        try {
            if (!user) {

                setIsOpen(true)
                setTimeout(() => {
                    setIsOpen(false)
                }, 3000);
            }
            console.log("you hit the post commet")
            const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/addcomment/${postId}/comment`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId, text: comment }),
            });
            if (response.ok) {
                const resdata = await response.json()
                setComment("")
                setUpdate((preve) => !preve)
            }
        } catch (error) {
            console.log("error while posting comoment", error)
        }
    }

    const ToggleLike = async () => {
        try {
        
            const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/likeToggling/${postId}/${userId}`, {
                method: "post"
            })
            if (response.ok) {
                console.log("add succesfully")
                setUpdate((preve) => !preve)
                setLiked((liked)=>!liked)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className=''>
            <div className='flex justify-between mx-2 pb-1'>
                <div className='flex gap-2'>

                    <span className='curser-pointer text-md flex items-center'>
                        {likes && likes.length > 0 && likes.length}  <BiSolidLike className='text-md text-sky-500 ' />
                    </span>

                </div>
                < div className='flex gap-2 items-center'>
                    <span className='text-sm hover:text-sky-500 pointer' onClick={() => setHide((prive) => !prive)}>{comments && comments.length > 0 ? comments.length : ""} comments
                    </span>
                </div>
            </div>
            <div className='flex justify-between border border-y-slate-300 border-x-0 py-1  px-4'>
                <div className='flex gap-2'>
                    <span className={`text-2xl hover:text-sky-500 curser-pointer ${liked?"text-sky-blue":"" }`} onClick={ToggleLike}> <GoThumbsup /> </span>
                </div>
                < div className='flex gap-2 items-center'>
                    <span className='text-2xl hover:text-sky-500 pointer'><FaRegComment onClick={() => setHide((prive) => !prive)} />
                    </span>
                </div>
            </div>
            <div className={`tranniii ${hide ? 'block' : 'hidden'} transition ease-in-out delay-150`}>
                {comments && comments.map((comment) => {
                    return <div className="" key={comment._id} >
                        <div className=' my-1 flex justify-between items-center'>
                            <ProfileTitle avater={comment?.user?.avater} fullname={comment.user.fullname} time={comment.createdAt} classname="h-7 w-7" />
                            {userId === comment.user._id ? <TiDeleteOutline className='text-red-500 hover:bg-red-500 hover:text-white rounded-full m-2' onClick={() => deletcomment(comment._id)} />
                                : ""}                   </div>
                        <p className='px-4 mx-6 py-1 text-sm bg-slate-50 rounded-md'>{comment.text}</p>
                    </div>
                })
                }
            </div>
            <div className='descrition flex   gap-3 border px-3 mt-2 mb-2 py-1  flex-1 w-full rounded-3xl bg-[#F5F7FA] items-center justify-center'>
                <input type="text" placeholder=' ✍ type comment.' onChange={(e) => setComment(e.target.value)} value={comment} className='w-full outline-none   bg-[#F5F7FA]' />
                <span className="text-xl hover:text-sky-500 duration-1000 text-[#999999]"> <LuSendHorizonal onClick={postCommet} /></span>
            </div>
            <Modalmessage isOpen={isOpen} message={`Sorry Login is required !!!`} />
        </div>
    )
}

export default PostComments
