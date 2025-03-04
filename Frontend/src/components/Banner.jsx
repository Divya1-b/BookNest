import React from 'react'
import './Banner.css'
import banner from '../../public/banner1.png'
export const Banner = () => {
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 lg:flex  no-underline'>
  <div className="w-full  md:w-1/2 mt-20 md:mt-20">
  <div className='space-y-12 no-underline'>
  <h1 className='text-4xl font-bold space-x-4 decoration-none' style={{ textDecoration: "none" }}>
  Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!</span>
  </h1>
  
  <p className='font-sans text-2xl font-normal' style={{ textDecoration: "none" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi asperiores quod id. Repellat, nostrum minima. Dolor consequuntur fuga aliquid.</p>
  <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
<button className='mt-x-3 btn btn-secondary'>Get Started</button>
  </div>
  </div>
  <div className=" w-full  md:w-1/2 order-2 md:order-1">
  <img src={banner} className='w-92 h-92' alt=""/>
  </div>
</div>
    </>
  )
}

