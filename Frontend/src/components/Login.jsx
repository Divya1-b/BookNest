import React from 'react'
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import axios from 'axios';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit=async(data)=>{
      const userInfo={
       
        email:data.email,
        password:data.password,
    }
  await axios.post("http://localhost:4001/users/login",userInfo)
  .then((res)=>{
    console.log(res.data);
    if(res.data){
      alert("Login Successfully done");
      document.getElementById("my_modal_3").close();
      setTimeout(()=>{
        
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      },1000)
      
    }
    
  })
  .catch((err)=>{
    if(err.response){
      console.log(err);
      alert("Error : "+err.response.data.message);
      setTimeout(()=>{},3000);
    }
   
    
  })
    }
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box  dark:bg-slate-900">
    <h3 className="font-bold text-lg justify-center text-center">Login</h3>
    <form onSubmit={handleSubmit(onSubmit)} className="modal-action flex flex-col space-y-4 w-full">

    <div className="modal-action">
      <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              onClick={()=>document.getElementById("my_modal_3").close()}>X</Link>
            </form>
      {/* Email */}
      <div className="modal-action flex flex-col space-y-4 w-full">
      <div className="font-normal space-y-2">
  <label className="block">Email</label>
  <input type="email" placeholder="Enter your Email" className="w-80 border rounded-md dark:text-black" 
  {...register("email",{required:true})}/>
  <br></br>
   {errors.email && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
</div>
<br/>
<div className="font-normal space-y-2 mt-4">
  <label className="block">Password</label>
  <input type="password" placeholder="Enter your Password" className="w-80 border rounded-md  dark:text-black" 
  {...register("password",{required:true})}
 />
 <br></br>
  {errors.password && <span className='font-thin text-sm text-red-500'>This field is requied*.</span>}
  
</div>
<div className='flex justify-around'>
    <button className='btn justify-center text-center' type='submit'>Login</button>
    <br/>
    <p className='font-light text-sm'>Not Registered?<Link to="/signup" className='underline text-blue-500'>SingUp</Link></p>
</div>
</div>
{/* buttons */}
    </div>
    </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login