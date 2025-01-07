import React from 'react';
import Image from 'next/image';
import modetocode from '../../assets/mtcforpage.png'

const Landpage = () => {
  return (
    <div className='bg-[#050126] py-[30vh]'>
        <div className='flex flex-row items-center justify-center'>
            <Image src={modetocode} alt="mode to code image" width={500} height={500} className='w-[50%] h-auto '/>
            <div>
                
            </div>
        </div>

    </div>
  )
}

export default Landpage