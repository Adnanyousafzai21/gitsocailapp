import React, { useEffect, useState } from 'react';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { RxCross2 } from "react-icons/rx";
import Profileimg from './Profileimg';
import cloudinaryUpload from './cloudinay';

const Editpost = ({ postId, isModalOpen, setIsModalOpen, setUpdate }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const Navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('User'));
  const User = data?.user ? data?.user : ""

  const [editpostSelectedFile, setEditpostSelectedFile] = useState(null);
  const [editpostPreviewUrl, setEditpostPreviewUrl] = useState(null);

  const [isLoading, setIsloading] = useState(false);

  const handelDocChange = (event) => {
    console.log(event)
    const file = event.target?.files[0];
    setEditpostSelectedFile(file);
    const preview = URL.createObjectURL(file)
    setEditpostPreviewUrl(preview);
  };

  const [description, setDescription] = useState('');
  const update = (e) => {
    setDescription(e.target.value);
  };

  const isPostButtonVisible = editpostSelectedFile || description.trim().length > 0;

  const handleForm = async () => {
    try {
      console.log("the file is bieng hited");
      setIsloading(true);
      const file = await cloudinaryUpload(editpostSelectedFile);

      const payload = {
        description: description,
        file: file,
        user: User._id
      }

      console.log("Cloudinary upload result:", payload);
      const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/updatePost/${postId}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const resdata = await response.json();
        setDescription('');
        setEditpostSelectedFile(null);
        setIsModalOpen(false);
        // Navigate('/')
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      console.log('something went wrong', error);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, [postId]);

  const getPost = async () => {
    try {
      setIsloading(true);
      const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/getForUpdate/${postId}`);

      if (response.ok) {
        const resdata = await response.json();
        setDescription(resdata.post.description);
        setEditpostSelectedFile(resdata.post.file);
        setIsloading(false);
        setEditpostPreviewUrl(resdata.post.file);
      }
    } catch (error) {
      console.log('something went wrong', error);
    } finally {
      setIsloading(false);
    }
  };

  const customModalStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      width: '100%',
      margin: 'auto',
      transition: 'all 1s ease-in-out',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: 'auto',
      padding: '40px',
      width: '30%',
      transition: 'all 1s ease-in-out',
      borderRadius: '10px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
    },
  };

  if (window.innerWidth < 800) {
    customModalStyles.content.width = '90%';
  }
  const Rxcorss = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal isOpen={isModalOpen} style={customModalStyles} onClose={() => setIsModalOpen(false)}>

        <div
          title={`!! Donn't Upload Uncompressed or large-File/Videos\nit's take tooMuch time and can be rejected so donn't `}
          className=' rounded-lg md:w-full   mx-auto relative'
        >
          <div className='  my-2 p-5 mt-[-50px] flex justify-center '><RxCross2 onClick={Rxcorss} className=' hover:bg-red-500 hover:text-white text-center  text-red-500 font-bold  my-3 rounded-full m-3 w-5 h-5' /></div>

          <div className='  flex justify-center items-center gap-4'>
            <Profileimg avater={User.avater} />
            <div className='py-1 pt-3 w-[70%]'>
              <input
                onChange={update}
                name='description'
                value={description}
                type='text'
                placeholder='Write here...'
                className='w-full py-1 px-1 text-base outline-none   focus:border-b focus:border-sky-500'
              />
            </div>
            <div className='w-[15%] h-9 overflow-hidden rounded-md border-sky-500 border flex justify-center  items-center '>
              <label title='UploadImage' htmlFor='inputeditfile' className='cursor-pointer text-blue-500 text-2xl '>
                <MdOutlineInsertPhoto />
              </label>
              <input id='inputeditfile' type='file' accept='image/*,video/*' onChange={handelDocChange} className='hidden' />
            </div>
          </div>

          {editpostSelectedFile && (
            <div className='duration-1000 w-[60%]  overflow-hidden min-h-9 mx-auto'>
              {editpostPreviewUrl && (
                <img src={editpostPreviewUrl} alt='Selected File Preview' className='w-full  rounded-md  m-auto ' />
              )}
            </div>
          )}
          {isPostButtonVisible && (
            <div className='tex-center py-3 flex justify-center w-full'>
              <button
                onClick={handleForm}
                className='px-3  w-[65%] mx-auto bg-sky-500 outline-none rounded text-customwhite'
              >
                {isLoading ? 'file is updating...' : 'Edit'}
              </button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Editpost;
