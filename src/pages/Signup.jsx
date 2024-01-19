import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modalmessage from '../components/Modal';

const Signup = () => {
    const navigate = useNavigate()
     const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm()

     const [isOpen, setIsOpen] = useState(false)



    console.log("this is the sign up page!!")
    const Registeration = async (data) => {
        try {
            setIsOpen(true)

            const formData = new FormData();
            formData.append('fullname', data.fullname);
            formData.append('email', data.email);
            formData.append('password', data.password);
            // formData.append('avater', data.avater[0]);

            const { confirm_Password, ...datatosend } = data;
            const response = await fetch("https://socailmediaappapi.vercel.app/api/v1/users/register", {
                method: "post",
                body: formData,
            });

            reset();

            if (response.ok) {
                const resdata = await response.json();
                console.log("signup successfully ", resdata);
                localStorage.setItem("User", JSON.stringify(resdata))
                 setIsOpen(false)  
                  navigate("/login");
            
            } else {
                const resdata = await response.text();
                console.log("there is an error while responding ", resdata);
            }
        } catch (error) {
            console.log("there is an error while registration ", error);
        }
    };


const clicked =()=>{
    console.log("button clicked")
}


    const handleFileChange = (e) => {
        const file = e.target?.files?.[0]
        setValue("avater", file)
    }
    return (
        <>
            <div className="w-[100%] md:px-20 px-4 py-5 flex items-center justify-center h-min-screen">
                <form onSubmit={handleSubmit(Registeration)}  className=' lg:w-[40%] md:w-[50%] text-sm  m-auto w-[100%]  bg-white py-7 lg:px-20 px-10  rounded-md'>
                    <h3 className='text-sky-500 text-center font-bold text-xl'> SignUp </h3>
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="fullname">FullName:</label>
                        <input type="text" {...register('fullname', { required: "fullname is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none ' />
                    </div>
                    {errors.fullname && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.fullname.message}</p>}
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="">Email:</label>
                        <input type="email"  {...register('email', { required: "email is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.email && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.email.message}</p>}
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="">Password:</label>
                        <input
                            type="password"  {...register('password', { required: "password is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none' autoComplete="off" />
                    </div>
                    {errors.password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.password.message}</p>}
                    <div className='w-full my-3'>
                        <label className='' htmlFor="">Confrim Password:</label>
                        <input autoComplete='off' type="password"  {...register('confirm_Password', {
                            required: 'confirm password is required',
                            validate: (value) => value === watch('password') || 'Passwords do not match',
                        })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.confirm_Password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.confirm_Password.message}</p>}
                    <div className='w-full my-3 gap-3' title={`profile image is disabaled temrarly for security reson not required ,\n without create account!`}>
                        <label className='' htmlFor="">Profile photo:</label>
                        <input autoComplete='off' type="file" name="avater" 
                            onChange={handleFileChange}  {...register('avater' )} className='w-full px-2 md:px-6  border-0 border-b outline-none  'disabled />
                    </div>
                    {errors.avater && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.avater.message}</p>}
                    <div className='w-[100%]   flex items-center mb-7 flex-col'>

                    <input type="submit" value="Create Acoount" className='text-sm hover:bg-white duration-1000 hover:text-sky-500 border-2 border-sky-500 px-7 outline-none bg-sky-500 rounded text-white' />
                    </div>
                </form>
                <Modalmessage isOpen={isOpen} message={`you are successfully loged In \n redirected to homepage`} onClose={() => setIsOpen(false)} ariaHideApp={false} />
            </div>


        </>
    )
}

export default Signup
