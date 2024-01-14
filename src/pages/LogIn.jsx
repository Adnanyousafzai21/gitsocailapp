
import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';

const LogIn = () => {
    // const navigate= useNavigate()

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm()
    const login = async (data) => {
        console.log("request data", data)
        const response = await fetch("https://socailmediaappapi.vercel.app/api/v1/users/login",
            {
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        if (response.ok) {
            const loginedres = await response.json()
       
            localStorage.setItem("User", JSON.stringify(loginedres))
        }

    }
    return (
        <>
            <div className="bg-slate-100 w-[100%]  py-8 ">
                <form onSubmit={handleSubmit(login)} autoComplete='off' className="bg-white rounded-md m-auto md:w-[40%] w-[90%] lg:w-[30%] px-10 py-8" >

                    <h2 className='text-sky-500 text-center font-bold text-xl'>LogIn</h2>
                    <div className="w-full my-5 ">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input type="email" {...register("email", { required: "Email is required*" })} className='w-full px-6 py-1 border-0 border-b outline-none ' />
                    </div>
                    {errors.email && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.email.message}</p>}
                    <div className="w-full my-5 ">
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input autoComplete='off' type="password" {...register('password', { required: 'Password is required*' })} className='w-full px-6 py-1 border-0 border-b outline-none' />
                    </div>
                    {errors.password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.password.message}</p>}
                    <div className="w-full my-5  text-center">
                        <input type="submit" value="LogIn" className='text-sm hover:bg-white duration-1000 hover:text-sky-500 border-2 border-sky-500 px-7 outline-none bg-sky-500 rounded text-white' />
                    </div>
                    <p className=' my-53 text-center w-full text-sm  font-thin'>If you don't already have  <Link className='text-sky-600 underline' to="/signup"> SignUp </Link> !</p>




                </form>
            </div>
        </>
    )
}

export default LogIn
