import React from 'react'
import { SpotlightBorder } from './SpotlightBorder'
import Image from 'next/image'
import modetocode from '../../assets/modetocodebg.png'
import schoolimg from '../../assets/ifbackground.jpeg'
import Link from 'next/link'

const MyProjects = () => {
    return (
        <div>
            <h3 className='flex justify-center text-5xl text-center mb-0 mt-96 font-bold'>Here are some of my projects:</h3>
            <div className='flex flex-row items-center justify-center gap-36'>
                <div className='flex flex-row items-center justify-center mt-24 z-0'>
                    <SpotlightBorder className="h-[650px] w-96 duration-500  bg-[#050126] hover:shadow-xl hover:shadow-[#D0E4E3]" spotlightColor="white">
                        <div className='pl-8 pt-8'>
                            <h2 className='text-3xl'>Mode to Code</h2>
                        </div>
                        
                        
                        
                        <hr className='mx-8 mt-1 h-1 bg-white border-0'/>
                        <div className='px-8 h-auto mt-8'>
                            <Image src={modetocode} alt="image of mode to code" className='rounded-lg border-white border-2'></Image>
                        </div>
                        <div className='px-8 py-8'>
                            <p>This was a project that helps teach students how to code and other basic software technologies.</p>
                        </div>
                        <div className='flex w-full justify-center'>
                        <Link href="/modetocode" target='_blank'><button className='border-white border-2 rounded-lg px-4 py-4 hover:bg-white hover:text-black duration-500 hover:cursor-pointer'>Learn more</button></Link>
                        </div>
                    </SpotlightBorder>
                </div>
                <div className='flex flex-row items-center justify-center mt-24 z-0'>
                <SpotlightBorder className="h-[650px] w-96 bg-[#667a8a] duration-500   hover:shadow-xl hover:shadow-white " spotlightColor="white">
                        <div className='pl-8 pt-8'>
                            <h2 className='text-3xl'>School Projects</h2>
                        </div>
                        
                        
                        
                        <hr className='mx-8 mt-1 h-1 bg-white border-0'/>
                        <div className='px-8 h-auto mt-8'>
                            <Image src={schoolimg} alt="image of mode to code" className='rounded-lg border-white border-2'></Image>
                        </div>
                        <div className='px-8 py-8 text-xl'>
                            <p>Here are some projects that I worked on during high school for some of my classes. This project was a lot of fun to work on and I enjoyed it.</p>
                        </div>
                        <div className='flex w-full justify-center'>
                            <Link href="/schoolprojects"><button className='border-white border-2 rounded-lg px-4 py-4 hover:bg-white hover:text-black duration-500 hover:cursor-pointer'>Learn more</button></Link>
                        </div>
                    </SpotlightBorder>
                </div>
            </div>
        </div>
    )
}

export default MyProjects