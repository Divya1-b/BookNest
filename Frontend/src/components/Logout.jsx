import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{

            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            alert("Logout Successfully")
            window.location.reload();
            setTimeout(()=>{
        
       
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      },2000)
      
           
        }
        catch(err){
            alert("Error : "+err.message);
            setTimeout(()=>{},3000);
        }
    }
  return (
    <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" 
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout