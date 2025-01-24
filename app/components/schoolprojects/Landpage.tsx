import React from 'react';
import Image from 'next/image';
import englishImage from '../../assets/ifbackground.jpeg';

const Landpage = () => {
  return (
    <div className='text-white'>
      <h1 className='text-9xl text-center flex flex-col justify-center text-[#99E1D9] my-56'>School Projects</h1>


      <div className='flex flex-row items-center justify-center mt-56 gap-x-12'>
        <div className='flex flex-col max-w-2xl gap-y-12 ml-24'>
          <h2 className='text-5xl'>English Final Project</h2>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et consequatur rem maxime, reiciendis quisquam ab libero earum excepturi aspernatur, sit accusantium eos eveniet amet enim quasi molestias quas alias!</p>
        </div>
        <div className='w-full mr-24'>
          <Image src={englishImage} width={500} height={500} className='w-full rounded-md shadow-xl shadow-white' alt="image of english picture"></Image>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center mt-56 gap-x-12'>
        <div className='w-full ml-24'>
          <Image src={englishImage} width={500} height={500} className='w-full rounded-md shadow-xl shadow-white' alt="image of english picture"></Image>
        </div>
        <div className='flex flex-col max-w-2xl gap-y-12 mr-24 text-right'>
          <h2 className='text-5xl'>English that lines up</h2>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et consequatur rem maxime, reiciendis quisquam ab libero earum excepturi aspernatur, sit accusantium eos eveniet amet enim quasi molestias quas alias!</p>
        </div>

      </div>
    </div>
  )
}

export default Landpage