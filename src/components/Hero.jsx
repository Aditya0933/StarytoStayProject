import React from 'react';
import beachVid from '../assets/dog.mp4';
import './Hero.css'

const Hero = ({ sticky, nav }) => { // Pass sticky and nav as props
  return (
    <div className={`w-full h-screen relative ${sticky ? 'sticky' : ''} ${nav ? 'hidden' : ''}`}>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
             <h2 className='text-5xl mb-2'>Rescue, Rehabilitate, Rehome</h2>
         <h2 className='py-5 text-4xl'> Changing Lives Fur-ever!</h2>
        <div className='flex justify-center items-center gap-5 mt-6'>
           <div>
             <button className='btn-1'>Find Me More </button>
           </div>
           <div>
             <button className='btn-2'> Adopt Me </button>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;
