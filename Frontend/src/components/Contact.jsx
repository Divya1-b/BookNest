import React from 'react'
import { useForm } from 'react-hook-form';
const Contact = () => {
    const {
                register,
                handleSubmit,
                formState:{errors},
            }=useForm();
            const onSubmit=(data)=>console.log(data);
  return (
    <>
    <div className=' flex h-screen  items-center justify-center border shadow-lg p-5 '>
        <form onClick={handleSubmit(onSubmit)} className='w-96 p-5 border rounded-lg shadow-md'>
            <h1 className='text-center text-xl font-bold mb-4'>Contact Us</h1>
            <div className='font-sans '>
            <div >
                <label className='dark:text-white'>Name</label>
                <br></br>
                <input type="name" placeholder='Enter your name' className='w-full  border p-2 rounded-md dark:text-black'
                 {...register("name",{required:true})}></input>
                 
                 {errors.name && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
            </div>
            <div>
                <label className='dark:text-white'>Email</label>
                <br></br>
                <input type="email" placeholder='Enter your email' className='w-full  border p-2 rounded-md dark:text-black'
                 {...register("email",{required:true})}></input>
                 <br></br>
                  {errors.email && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
            </div>
            <div>
                <label className='dark:text-white'>Message</label>
                <br></br>
                <textarea type="message" placeholder='Enter your message' className='w-full  border p-2 rounded-md dark:text-black'
                 {...register("message",{required:true})}></textarea>
                 <br></br>
                  {errors.message && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
            </div>
            <div className='align-center px-10'>
            <button type="submit" className='bg-slate-500 text-white mx-14 px-6 py-2 rounded-lg'>Submit</button>
            </div>
            </div>
        </form>
    </div>
    
    </>
  )
}

export default Contact