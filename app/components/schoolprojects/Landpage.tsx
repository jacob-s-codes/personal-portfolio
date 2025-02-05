import React from 'react';
import Image from 'next/image';
import englishImage from '../../assets/ifbackground.jpeg';
import Link from 'next/link';

const Landpage = () => {
  return (
    <div className='text-white'>
      <div className='py-56 bg-[#99E1D9]'>
        <h1 className='text-9xl text-center flex flex-col justify-center  '>School Projects</h1>
        <h2 className='text-center text-5xl pt-8'>Here are some projects that I've worked on for school.</h2>
      </div>


      <div className='flex flex-row items-center justify-center mt-56 gap-x-12'>
        <div className='flex flex-col max-w-2xl gap-y-12 ml-24'>
          <div className='flex flex-row items-center'>
            <hr className='w-[50%]'/>
            <h2 className='text-5xl text-center'>English Final Project</h2>
            <hr className='w-[50%]'/>
          </div>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et consequatur rem maxime, reiciendis quisquam ab libero earum excepturi aspernatur, sit accusantium eos eveniet amet enim quasi molestias quas alias!</p>
        </div>
        <div className='w-full mr-24'>
          <Link href={"https://jacob-s-codes.github.io/Intro-to-feminism-final-project/"} target='_blank'><Image src={englishImage} width={500} height={500} className='w-full rounded-md hover:shadow-xl hover:shadow-white duration-500' alt="image of english picture"></Image></Link>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center mt-56 gap-x-12'>
        <div className='w-full ml-24'>
          <Image src={englishImage} width={500} height={500} className='w-full rounded-md shadow-xl shadow-white' alt="image of english picture"></Image>
        </div>
        <div className='flex flex-col max-w-2xl gap-y-12 mr-24 text-right'>
          <div className='flex flex-row items-center w-full'>
            <hr className='w-[50%]'/>
            <h2 className='text-5xl text-center'>Biology Final Project</h2>
            <hr className='w-[50%]'/>
          </div>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et consequatur rem maxime, reiciendis quisquam ab libero earum excepturi aspernatur, sit accusantium eos eveniet amet enim quasi molestias quas alias!</p>
        </div>

      </div>
    </div>
  )
}

export default Landpage