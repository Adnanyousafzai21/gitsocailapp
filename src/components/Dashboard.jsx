import React, { useState } from 'react';
import Profileimg from './Profileimg';
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Modalmessage from './Modal';
const Dashboard = ({ setUpdate }) => {
   const Navigate= useNavigate()

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsloading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleFileChange = (event) => {
        const file = event.target?.files[0];
        setSelectedFile(file);
        const preview = URL.createObjectURL(file);
        setPreviewUrl(preview);
    };
    const [description, setDescription] = useState("")
    const update = (e) => {
        setDescription(e.target.value)

    }
    const isPostButtonVisible = selectedFile || description.trim().length > 0;

    const handleForm = async () => {

        try {
            const isLoggedIn = localStorage.getItem('userId');
            if (!isLoggedIn) {
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
                formData.append("user", '659d612a662a0da1dbaab445')
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
        <div title={`!! Donn't Upload Uncompressed or large-File/Videos\nit's take tooMuch time and can be rejected so donn't `} className='py-5 px-5 rounded-lg background bg-white w-full'>
            <div className='w-full flex justify-between items-center gap-4'>
                <div className="w-[15%]">
                    <Profileimg />
                </div>

                <div className='py-1 pt-3 w-[70%]' >
                    <input
                        onChange={update}
                        name="description"
                        value={description}
                        type='text'
                        placeholder='Write here...'
                        className='w-full py-1 px-1 text-base outline-none   focus:border-b focus:border-sky-500'
                    />
                </div>
                <div className='w-[15%] h-9 overflow-hidden rounded-md border-sky-500 border flex justify-center  items-center '>
                    <label title='UploadImage' htmlFor="fileInput" className="cursor-pointer text-blue-500 text-2xl  ">
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
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Selected File Preview"
                            className="max-w-full h-auto rounded-md  m-auto "
                        />
                    )}   <p className='text-skyblue-500'>{(selectedFile.name).slice(0, 15)}</p>
                </div>
            )}
            {
                isPostButtonVisible && (<div className='tex-center py-3 flex justify-center w-full' >
                    <button onClick={handleForm} className='px-3  w-[65%] mx-auto bg-sky-500 outline-none rounded text-white'>{isLoading ? "file is upLoading..." : "Post"}</button>
                </div>)
            }
            {isModalOpen && (
        <Modalmessage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={"It's  need Longin frist your are redirected to loin page"} />
      )}
        </div>
    );
}

export default Dashboard;
