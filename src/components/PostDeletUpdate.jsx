import React, { useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Editpost from './Editpost';
import { Link } from 'react-router-dom';
const PostDeletUpdate = ({ postId,}) => {
const [isModalOpen, setIsModalOpen]= useState(false)
// console.log("editiing postid", postId)
  const deletePost = async (postId) => {

    try {
      const response = await fetch(`http://localhost:8000/api/v1/posts/postDelete/${postId}`, {
        method: 'delete'
      })
      if (response.ok) {
        console.log("delete successully", response)
      }
    }
    catch (error) {
      console.log("eroor while sending reques from front end", error)
    }
  }
  const Edit =(postid) =>{
   setIsModalOpen(true)
   console.log("editiing postid", postid)
  }
  return (
    <div className='flex gap-2'>
  
      <div title='Edit'className='text-sky-500'> <CiEdit onClick={()=>Edit(postId)} /> </div>

     <div title='Delete'className='text-red-500'><MdOutlineDeleteOutline onClick={() => deletePost(postId)} /></div>
     <div><Editpost postId={postId} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /></div>
 
     </div>
  )
}

export default PostDeletUpdate
