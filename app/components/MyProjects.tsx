import React from 'react'
import { SpotlightBorder } from './SpotlightBorder'
import Image from 'next/image'
import modetocode from '../assets/modetocodebg.png'

const MyProjects = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-36'>
            <div className='flex flex-row items-center justify-center mt-96 z-0'>
                <SpotlightBorder className="h-[600px] w-96 hover:scale-[105%] duration-1000 ease-in-out bg-black" spotlightColor="white">
                    <div className='pl-8 pt-8'>
                        <h2 className='text-3xl'>Mode to Code</h2>
                    </div>
                    
                    
                    
                    <hr className='mx-8 mt-2 h-1 bg-white border-0'/>
                    <div className='px-8 h-auto'>
                        <Image src={modetocode} alt="image of mode to code"></Image>
                    </div>
                    <div className='px-8'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae tenetur necessitatibus esse consequuntur assumenda aspernatur ab, officiis impedit voluptates fuga excepturi, asperiores nemo omnis repellat iste. Nisi, dolor ullam.</p>
                    </div>
                </SpotlightBorder>
            </div>
            <div className='flex flex-row items-center justify-center mt-96 z-0'>
                <SpotlightBorder className="h-[600px] w-96 flex flex-row items-center justify-center" spotlightColor="#0EA5E9">
                    <h1>Text</h1>
                </SpotlightBorder>
            </div>
        </div>
    )
}

export default MyProjects