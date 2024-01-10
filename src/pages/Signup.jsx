import React from 'react'
import { useForm } from "react-hook-form";

const Signup = () => {

    const { register, handleSubmit, setValue, watch, reset, formState: { errors, isValid, } } = useForm()
    const signup =async (data) => {
        try {
            console.log("sign up clicked")
            
            if (isValid) {
                const formData = new FormData();
                formData.append('fullname', data.fullname);
                formData.append('email', data.email);
                formData.append('password', data.password);
                formData.append('avater', data.avater[0]);
                console.log("sendign data to ",formData)
                const { confirm_Password, ...datatosend } = data
                const response =await fetch("http://localhost:8000/api/v1/users/register", {
                    method: "post",
                    // headers: {  "Content-Type": "multipart/form-data", },
                    body: formData,
                })
                reset()
              
                if(response.ok){
                    const resdata= await response.json()
                    // const resdata= await response.json()
                    console.log("signup successfully ", resdata)
                }
                else{
                    const resdata= await response.text()
                   console.log("there is error while responding ",resdata )
                }
            }
        } catch (error) {

            console.log( "there is errror while registrion ",error)

        }

    }
    const handleFileChange = (e) => {
        const file = e.target?.files?.[0]
        setValue("avater", file)
    }
    return (
        <>
            <div className="w-[100%] md:px-20 px-4 py-5 flex items-center justify-center h-min-screen">
                <form autoComplete='off' className=' lg:w-[40%] md:w-[50%] text-sm  m-auto w-[100%]  bg-white py-7 lg:px-20 px-10  rounded-md' onSubmit={handleSubmit(signup)}>
                    <h3 className='text-sky-500 text-center font-bold text-xl'> SignUp </h3>
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="fullname">FullName:</label>
                        <input type="text" {...register('fullname', { required: "fullname is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none ' />
                    </div>
                    {errors.fullname && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.fullname.message}</p>}
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="fullname">Email:</label>
                        <input type="email"  {...register('email', { required: "email is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.email && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.email.message}</p>}
                    <div className='w-full my-3 '>
                        <label className='' htmlFor="fullname">Password:</label>
                        <input type="password" {...register('password', { required: "password is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.password.message}</p>}
                    <div className='w-full my-3'>
                        <label className='' htmlFor="fullname">Confrim Password:</label>
                        <input autoComplete='off' type="password"  {...register('confirm_Password', {
                            required: 'confirm password is required',
                            validate: (value) => value === watch('password') || 'Passwords do not match',
                        })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.confirm_Password && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.confirm_Password.message}</p>}
                    <div className='w-full my-3 gap-3'>
                        <label className='' htmlFor="fullname">Profile photo:</label>
                        <input autoComplete='off' type="file" name="avater"
                            onChange={handleFileChange}  {...register('avater', { required: "file is required" })} className='w-full px-2 md:px-6  border-0 border-b outline-none  ' />
                    </div>
                    {errors.profilePhoto && <p className='text-red-500 mt-[-20px] mb-2 font-thin'>{errors.profilePhoto.message}</p>}
                    <div className='w-[100%]   flex items-center mb-7 flex-col'>

                        <input type="submit" value="SignUp" className='my-5 hover:bg-white duration-300 hover:text-sky-500 border-2 font-semibold border-sky-500 px-6   outline-none bg-sky-500 rounded text-white' />
                    </div>
                </form>
            </div>


        </>
    )
}

export default Signup
