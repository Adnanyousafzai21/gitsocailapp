
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Modalmessage from '../components/Modal';

const LogIn = ({setData}) => {
    const navigate = useNavigate()
    const [message, setMessage]= useState()
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm()
    const login = async (data) => {
        try {

           setIsOpen(true)
            const response = await fetch("https://socailmediaappapi.vercel.app/api/v1/users/login",
                {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                const loginedres = await response.json()
            if (response.ok) {
                
                 setMessage(loginedres.message)
                console.log("message",loginedres.message)
                localStorage.setItem("User", JSON.stringify(loginedres))
               
                setTimeout(() => {
                    setIsOpen(false)
                    navigate("/")
                    setData(loginedres)
                }, 3000);
                
            }
            else{
                setMessage(loginedres.message)
                setTimeout(() => {
                  
                    setIsOpen(false)
                }, 5000);
                
            }
        } catch (error) {
            console.log("there is problem while logining",error)
            setMessage(error.message)
            setIsOpen(false)
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
                    <p className=' my-53 text-center w-full text-sm  font-thin'>If you don't  have already <Link className='text-sky-600 underline font-normal ml-2' to="/signup"> SignUp </Link> !</p>
                </form>

                <Modalmessage isOpen={isOpen} message={`${message?message:"Your request for logining is being porccessed"}`}onClose={() => setIsOpen(false)} />
            </div>
        </>
    )
}

export default LogIn
