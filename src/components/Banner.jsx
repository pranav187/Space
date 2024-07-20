import React from 'react'
import satelliteImg from './../assets/images/satelite1.jpg';

function Banner() {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
                <div>
                      <img data-aos="zoom-in"  src={satelliteImg} alt="" className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover' />
                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-600'>
                      <p data-aos="fade-up"  className='text-sky-800 uppercase '>Our Mission</p>
                      <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl '>Rapidcast</h1>
                      <p data-aos="fade-up" data-aos-delay="500" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid, non qui quia voluptates excepturi corrupti enim distinctio minus doloremque sint impedit amet obcaecati ab eaque? Maxime a labore animi debitis numquam corrupti sit voluptatibus sequi cumque eum, aliquam neque temporibus reiciendis accusantium excepturi! Magni, possimus. Minus soluta eum tempora?</p>
                      <button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Banner
