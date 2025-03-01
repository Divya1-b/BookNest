
import React from 'react'
import Navbar from '../components/Navbar'
// import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner';
import Footer from '../components/Footer.jsx';
import '../index.css';
import FreeBoo from '../components/FreeBoo';

export default function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Navbar/>
      <Banner/>
      <FreeBoo/>
      <Footer/>
    </div>
  )
}
