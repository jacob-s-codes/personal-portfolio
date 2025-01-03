import React from 'react';
import NavBar from '../components/NavBar';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-orbitron', // Add a CSS variable for Orbitron
});

const page = () => {
  return (
    <div className={`text-[#F0F7F4] z-10 orbitron bg-[#32292F] w-full font-orbitron` }>
        <NavBar/>
    </div>
  )
}

export default page