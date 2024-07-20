import { useEffect } from 'react'
import React from 'react'
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  React.useEffect(()=>{
    AOS.init({
      duration:1200,
      easing: "ease-in-out",

    });
  })
 

  return (
    <>
    <div className='scroll-smooth'>
      <div className='h-[700px] relative'>
        <video autoPlay loop muted className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <Navbar/>
        <Hero/>

      </div>

      {/* // service card section */}

      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>

    </div>
     
    </>
  )
}

export default App
