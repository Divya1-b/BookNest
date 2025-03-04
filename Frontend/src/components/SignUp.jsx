import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, Navigate, replace, useLocation, useNavigate} from "react-router-dom";
import Login from './Login';
const SignUp = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";
    const {
            register,
            handleSubmit,
            formState:{errors},
        }=useForm();
        const onSubmit=async (data)=>{
          const userInfo={
              name:data.name,
              email:data.email,
              password:data.password,
          }
        await axios.post("http://localhost:4001/users/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            alert("Signup Successfully done");
            navigate(from ,{replace:true});
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        })
        .catch((err)=>{
          console.log(err);
          alert("Error : "+err.response.data.message);
        })
        }
  return (
    <div className=' flex h-screen  items-center justify-center border shadow-md p-5'>
      
    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
  <div className="modal-box  dark:bg-slate-900">
    <h3 className="font-bold text-lg justify-center text-center">Signup</h3>
    <p className="py-1 font-normal"></p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</Link>
      </form>
      {/* Email */}
      <div className="modal-action flex flex-col space-y-4 w-full">
      <div className="font-normal space-y-2">
  <label className="block">Name</label>
  <input type="name" placeholder="Enter your Name" className="w-80 border rounded-md dark:text-black" 
  {...register("name",{required:true})}/>
  <br/>
  {errors.name && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
</div>
<br/>
      <div className="font-normal space-y-2">
  <label className="block">Email</label>
  <input type="email" placeholder="Enter your Email" className="w-80 border rounded-md dark:text-black"
  {...register("email",{required:true})} />
  <br/>
  {errors.email && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
</div>
<br/>
<div className="font-normal space-y-2 mt-4 ">
  <label className="block">Password</label>
  <input type="password" placeholder="Enter your Password" className="w-80 border rounded-md  dark:text-black" 
  {...register("password",{required:true})}/>
  <br></br>
  {errors.password && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
</div>
<div className='flex justify-around'>
    <button className='btn justify-center text-center' onClick={handleSubmit(onSubmit)}>signUp</button>
    
    <p className="text-sm">
            Have an account?{" "}
            <button 
              className="underline text-blue-500"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>
</div>
</div>
{/* buttons */}
<Login/>
    </div>
  </div>
  {/* </form> */}
</div>

   
  )
}

export default SignUp

