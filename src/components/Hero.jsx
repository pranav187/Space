import React from 'react'
import MountainPng from './../assets/images/moon-surface-hd.png';

function Hero() {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
                <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Orbit The Earth</h1>
            <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aut ad, veniam asperiores inventore placeat voluptas quas illo perspiciatis reprehenderit assumenda ipsam impedit quis esse.

                </p>

            <button data-aos="fade-up" data-aos-delay="500" className='primary-button'>Learn More</button>

            </div>
            <div></div>
        </div>
      </div>
          {/* surgace section */}
          <img src={MountainPng} alt="" className=' absolute right-0 bottom-0 w-full brightness-50 z-10 ' />

          {/* bottom gradient section */}

          <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px] '>

          </div>
    </div>
  );
};

export default Hero
