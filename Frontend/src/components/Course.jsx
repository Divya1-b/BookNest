import React, { useEffect, useState } from 'react'
import Cards from './Cards.jsx'
import axios from "axios";
import { Link } from 'react-router-dom';
const Course = () => {
const [book,setBook]=useState([])
useEffect(()=>{
    const getBook=async()=>{
        try{
           const res= await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data);
        }catch(error){
            console.log(error);
        }
    }
    getBook();
},[])
  return (
    
    <>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 overflow-hidden'>
        <div className='mt-20 justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='mt-10 font-light text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi asperiores reiciendis a, perspiciatis, cumque optio ea enim tempore iste distinctio facilis facere esse molestias! Odit atque perferendis dignissimos error? Doloremque eos qui explicabo praesentium labore. Assumenda veniam iure voluptas consequuntur expedita, vitae alias unde optio molestiae dicta nemo nisi voluptatibus.</p>
      <Link to="/">
        <button className='text-white bg-pink-500 text-sm px-4 py-3 rounded-md hover:bg-pink-700 mt-6'>Back</button>
        </Link>
        </div>
        <div className='pd-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                  
    book.map((item)=>(
        <Cards item={item} key={item.id} />
    ))
   
            }
        </div>
    </div>
    </>
  )
}

export default Course