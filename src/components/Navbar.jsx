import React from 'react'
import logo from './../assets/images/logo.png';

function Navbar() {
  return (
    <div data-aos="fade-down" className='fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4 cursor-pointer'>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="flex text-white items-center gap-4 font-bold text-2xl">
                <img src={logo} alt="" className='w-10'/>
                <span>TCJ-SPACE</span>
            </div>
            <div className='text-white hidden md:block'>
                <ul className="flex items-center gap-14 text-xl py-4 sm:py-0">
                    <li className='cursor-pointer hover:text-blue-500'> <a href=""></a>About</li>
                    <li className='cursor-pointer hover:text-blue-500'> <a href=""></a>Technology</li>
                    <li className='cursor-pointer hover:text-blue-500'> <a href=""></a>Galaxy</li>
                          <li className='cursor-pointer hover:text-blue-500'> <a href=""></a>Satelite</li>
                </ul>
            </div>
            <div>
            <button className=" text-white border-2 border-white px-3 py-1 rounded-md hover:bg-blue-200 hover:text-blue-900">
              Login
            </button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
