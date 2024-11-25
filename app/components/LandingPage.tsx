import React from 'react'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className='text-primary flex flex-row items-center justify-evenly mt-40'>
            <div className='flex flex-col items-start gap-y-24'>
                <h1 className='text-8xl'>Jacob Shaul</h1>
                <h2 className='max-w-xl text-2xl'>, ipsum dolor sit amet consectetur adipisicing elit. Nulla alias error consequuntur itaque laboriosam recusandae doloribus quam excepturi quo nostrum.</h2>
            </div>
            <Image src="/facepicture.jpg" className='w-72 h-full rounded-3xl' width={500} height={500} alt='Different picture'/>


        </div>

       
    )
}

export default LandingPage