import React from 'react';
import Image from 'next/image';
import modeimg from '../../assets/modetocodebg.png'



const Landpage = () => {
    return (
        <div className='top-0'>
            <div className='py-56 bg-[#050126]'>
                <h1 className='text-9xl text-center '>MODE TO CODE</h1>
                <h2 className='text-center text-5xl pt-8'>Teaching students the vital technology that they need</h2>
            </div>

            <div className='flex flex-row items-center justify-between mt-28 mb-96'>
                <div className='max-w-2xl ml-28'>
                    <div className='flex flex-row items-center justify-start mb-12 w-full'>
                        <hr className='w-[50%]'/>
                        <h3 className='text-3xl font-bold pl-4 text-center'>What is Mode to Code?</h3>
                        <hr className='w-[50%]'/>
                    </div>
                    <h4 className=' text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit deleniti aliquid nihil rerum minima animi, iste porro magni quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum sed suscipit, omnis veritatis dicta dolores laudantium voluptatum natus sit enim ex atque, autem iste et unde nostrum architecto obcaecati.</h4>
                </div>
                <Image src={modeimg} width={500} height={500} alt='Image of mode to code logo' className='w-5/12 h-auto rounded-3xl border border-white mr-28'></Image>

            </div>

            <div className='text-center text-5xl pb-24'>
                <h2>Here's some statistics:</h2>
            </div>



        </div>
    )
}

export default Landpage