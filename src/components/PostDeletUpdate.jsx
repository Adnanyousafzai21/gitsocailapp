import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
const PostDeletUpdate = ({postId}) => {


const deletePost = async (postId)=>{

    try{
        const response = await fetch(`http://localhost:8000/api/v1/posts/postDelete/${postId}`,{
        method : 'delete'
    })
    if(response.ok){
        console.log("delete successully", response)
    }
    }
    catch(error){
        console.log("eroor while sending reques from front end",error)
    }
}


  return (
    <div className=' flex gap-2'>

  <div title='Edit' className=' text-sky-500'> <CiEdit  onClick={()=>deletePost(postId)}/></div>
  <div title='Delete' className='text-red-500'><MdOutlineDeleteOutline/></div>

    </div>
  )
}

export default PostDeletUpdate
