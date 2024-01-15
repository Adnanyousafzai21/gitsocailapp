import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import Profileimg from './Profileimg'; import { BiSolidLike } from "react-icons/bi";
const PostComments = ({ comments }) => {
    return (
        <div className=''>
            <div className='flex justify-between mx-2 pb-1'>
                <div className='flex gap-2'>
                    <span className='text-sm text-sky-500 curser-pointer'> <BiSolidLike /> </span>
                </div>
                < div className='flex gap-2 items-center'>
                    <span className='text-sm hover:text-sky-500 pointer'>Comments
                    </span>
                    {/* {comments.length} */}
                </div>
            </div>
            <div className='flex justify-between border border-y-slate-300 border-x-0 py-1  px-4'>
                <div className='flex gap-2'>
                    <span className='text-2xl hover:text-sky-500 curser-pointer'> <GoThumbsup /> </span>
                </div>
                < div className='flex gap-2 items-center'>
                    <span className='text-2xl hover:text-sky-500 pointer'><FaRegComment />
                    </span>
                    {/* {comments.length} */}
                </div>
            </div>

            <div className='descrition flex   gap-3 border px-3 mt-2 mb-2 py-1  flex-1 w-full rounded-3xl bg-[#F5F7FA] items-center justify-center'>
                <input type="text" placeholder=' ✍ type comment.' className='w-full outline-none   bg-[#F5F7FA]' />
                <span className="text-xl hover:text-sky-500 duration-1000 text-[#999999]"> <LuSendHorizonal /></span>
            </div>


        </div>

    )
}

export default PostComments
