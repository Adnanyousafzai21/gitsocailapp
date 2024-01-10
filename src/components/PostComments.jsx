import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import Profileimg from './Profileimg';
const PostComments = ({ comments }) => {
    return (
        <div className=''>
            <div className='flex justify-between px-2'>
                <div className='flex gap-2'><span className='text-2xl hover:text-sky-500 curser-pointer ' > <GoThumbsup /> </span> 4 likes</div>
                < div className='flex gap-2 items-center'>
                    <span className='text-xl hover:text-sky-500 pointer'><FaRegComment />
                    </span>
                    {/* {comments.length} */}
                     comments </div>
            </div>
            <div className='descrition flex  rounded- gap-3 border px-3 mt-2 mb-2 py-1 border-sky-200 flex-1 w-full items-center justify-center'>
                <input type="text" placeholder=' ✍ type comment.' className='w-full outline-none' />
                <span className="text-xl hover:text-sky-500 duration-1000"> <IoAddCircleOutline /></span>
            </div>
      

        </div>

    )
}

export default PostComments
