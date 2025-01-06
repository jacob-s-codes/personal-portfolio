import React from 'react';
import Image from 'next/image';
import modetocode from '../../assets/modetocodebg.png'

const Landpage = () => {
  return (
    <div className=''>
        <Image src={modetocode} alt="mode to code image" width={500} height={500} className='w-[50%] h-auto top-0'/>
    </div>
  )
}

export default Landpage