import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { MdOutlineInsertPhoto } from "react-icons/md";
import Profileimg from './Profileimg';

const StoriesDashboard = () => {
    const Navigate= useNavigate()
    const data =  JSON.parse(localStorage.getItem('User'));
    const User = data.user
    console.log("local storage",User)
     const [selectedFile, setSelectedFile] = useState(null);
     const [previewSUrl, setPrevieSUrl] = useState(null);
     const [isLoading, setIsloading] = useState(false)
     const [isModalOpen, setIsModalOpen] = useState(false);
     const handleFileChange = (event) => {
         const story = event.target?.files[0];
         setSelectedFile(story);
         const preview = URL.createObjectURL(story);
         setPrevieSUrl(preview);
     };
     const [description, setDescription] = useState("")
     const update = (e) => {
         setDescription(e.target.value)
 
     }
     const isPostButtonVisible = selectedFile || description.trim().length > 0;
 
     const handleForm = async () => {
 
         try {
         
             if (!data) {
                 setIsModalOpen(true);
                 setTimeout(() => {
                     setIsModalOpen(false);
                     Navigate("/login")
                 }, 10000);
 
                 return;
             }
             setIsloading(true)
             let formData = new FormData()
             formData.append('description', description)
             formData.append('file', selectedFile),
                 formData.append("user", User._id)
             const response = await fetch("http://localhost:8000/api/v1/posts/Posting", {
                 method: "post",
                 body: formData
             })
             if (response.ok) {
                 const resdata = response.json()
                 console.log("your post is successfully uploaded okay", resdata)
                 setDescription("")
                 setSelectedFile(null)
                 setUpdate((preve) => !preve)
             }
         } catch (error) {
             console.log("somthing wern rong", error)
 
         }
         finally {
             setIsloading(false)
         }
     }

    return (
        <div title={`!! Donn't Upload Uncompressed  or large-File/Videos\nit's take tooMuch time and can be rejected so donn't `} className='py-3 px-2 rounded background bg-customwhite'>
        <div className='w-full flex md:flex-row flex-col justify-between gap-1 '>
           <div className='md:block hidden'>
            <Profileimg/>
           </div>
            <div className='py-1 pt-3 w-[70%] ' >
                <input
                    onChange={update}
                    name="description"
                    value={description}
                    type='text'
                    placeholder='Write story...'
                    className='w-full py-1 px-1 font-light outline-none   focus:border-b focus:border-sky-500'
                />
            </div>
            <div className='w-[15%] h-6 overflow-hidden rounded border-sky-500 border flex justify-center  items-center '>
                <label title='UploadImage' htmlFor="fileInput" className="cursor-pointer text-blue-500 text-xl  ">
                    <MdOutlineInsertPhoto />
                </label>
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
        </div>

        {selectedFile && (
            <div className='duration-1000 w-full text-center'>
                {previewSUrl && (
                    <img
                        src={previewSUrl}
                        alt="Selected File Preview"
                        className="max-w-full h-20 rounded-md  m-auto "
                    />
                )}  
             </div>
        )}
        {
            isPostButtonVisible && (<div className='tex-center py-3 flex justify-center w-full' >
                <button onClick={handleForm} className='px-5 hover:bg-customwhite hover:border-sky-500 hover:text-sky-500 duration-300 hover:border   mx-auto bg-sky-500 outline-none rounded text-customwhite'>{isLoading ? "file is upLoading..." : "Post"}</button>
            </div>)
        }
        {isModalOpen && (
    <Modalmessage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={"It's  need Longin frist your are redirected to loin page"} />
  )}
    </div>
    )
}

export default StoriesDashboard
