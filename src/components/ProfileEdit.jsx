import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

import { useState } from 'react';
import Modal from 'react-modal';
import { setDate } from 'date-fns';
const ProfileEdit = () => {
    const user = JSON.parse(localStorage.getItem("User"))
    const userId = user && user.user._id
    console.log("user id for updating", userId)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm()
    const [isOpen, setIsOpen] = useState(true)
    const [message, setMessage] = useState()

    const updateProfile = async (data) => {
        try {

            console.log("this is the sign up page!!")
            // setIsOpen(true)
            const formData = new FormData();
            formData.append('fullname', data.fullname);
            formData.append('email', data.email);
            formData.append('currentPassword', data.current_password);
            formData.append('newPassword', data.new_Password);
            const { confirm_Password, ...datatosend } = data;
            const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/users/updateProfile/${userId}`, {
                method: "post",
                body: formData,
            });
            reset();
            const resdata = await response.json();
            console.log(resdata)
            if (response.ok) {
                localStorage.setItem("User", JSON.stringify(resdata))
                setDate(resdata)
                setMessage(resdata.message)
                setIsOpen(false)
                navigate("/profile")
            }
        } catch (error) {
            setMessage(error.message)
            console.log("there is an error while registration ", error);
        }
    };
    const handleFileChange = (e) => {
        const file = e.target?.files?.[0]
        setValue("avater", file)
    }

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
    const Rxcorss= ()=>{
        setIsOpen(false)
        navigate(-1)
    }
    return (
        <Modal style={customModalStyles} isOpen={isOpen} onClose={() => setIsOpen(false)} ariaHideApp={false}>
            <div className="w-[100%]  px-4 py-5 flex flex-col items-center justify-center h-min-screen ">
            <div className='  my-2 p-5  mr-[-100] text-end'><RxCross2 onClick={Rxcorss} className=' hover:bg-red-500 hover:text-white text-center  text-red-500 font-bold  my-3 rounded-full m-3 w-5 h-5' /></div>
      
                <form onSubmit={handleSubmit(updateProfile)} className=' w-full  bg-white py-7 rounded-md'>

                    <div className='w-full my-3 '>
                        <label className='' htmlFor="fullname">FullName:</label>
                        <input type="text" {...register('fullname')} className='w-full px-2 md:px-6  border-0 border-b outline-none ' />
                    </div>

                    <div className='w-full my-3'>
                        <label className='' htmlFor="">Email:</label>
                        <input type="email"  {...register('email')} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>

                    <div className='w-full my-3 '>
                        <label className='' htmlFor="">Current Password:</label>
                        <input
                            type="password"  {...register('current_password')} className='w-full px-2 md:px-6  border-0 border-b outline-none' autoComplete="off" />
                    </div>
                    <div className='w-full my-3'>
                        <label className='' htmlFor="">New Password:</label>
                        <input
                            autoComplete='off'
                            type="password"
                            {...register('new_Password', {
                                validate: {
                                    hasCurrentPassword: (value) => {
                                        const currentPassword = watch('current_password');
                                        return (!value || currentPassword) || 'Current password is required';
                                    },
                                },
                            })}
                            className='w-full px-2 md:px-6  border-0 border-b outline-none  '
                        />
                    </div>
                    {errors.new_Password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.new_Password.message}</p>}

                    <div className='w-full my-3 gap-3' title={`profile image is disabaled temrarly for security reson not required ,\n without create account!`}>
                        <label className='' htmlFor="">Profile photo:</label>
                        <input autoComplete='off' type="file" name="avater"
                            onChange={handleFileChange}  {...register('avater')} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' disabled />
                    </div>
                    <div className='w-[100%]   flex items-center mb-7 flex-col'>

                        <input type="submit" value="Update" className='text-sm hover:bg-white duration-1000 hover:text-sky-500 border-2 border-sky-500 px-7 outline-none bg-sky-500 rounded text-white' />
                    </div>
                </form>

            </div>
        </Modal>


    )
}

export default ProfileEdit
