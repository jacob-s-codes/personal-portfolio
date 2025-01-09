import React from 'react';
import NavBar from '../components/HomePage/NavBar';
import { Orbitron } from 'next/font/google';
import Landpage from '../components/ModetoCode/Landpage';

// const orbitron = Orbitron({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-orbitron', // Add a CSS variable for Orbitron
// });

const page = () => {
  return (
    <div className={`max-w-[1800px]` }>
        <NavBar/>
        <Landpage/>
    </div>
  )
}

export default page