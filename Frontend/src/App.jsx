
import React from 'react'
import { Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import { Banner } from './components/Banner'
// import {Footer} from './components/Footer'
import './index.css';
// import FreeBoo from './components/FreeBoo';
import Home from './home/Home';
import Courses from './courses/Courses';
import {Route,Routes} from "react-router-dom";
import SignUp from './components/SignUp';
import Contacts from './components/Contacts/Contacts';
import { useAuth } from './context/AuthProvider';
export default function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <div className="text-3xl font-bold underline dark:bg-slate-900 darK:text-white">
      
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to={"/signup"}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}
