import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
// import { SpotlightBorder } from './components/SpotlightBorder';
import TechStack from './components/TechStack';
import MyProjects from './components/MyProjects';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-orbitron', // Add a CSS variable for Orbitron
});






export default function Home() {


  return (
    <main className={`text-white z-10 orbitron bg-blue-950 w-full font-orbitron ${orbitron.variable}`}>
      <div className='max-w-[1500px] flex flex-col justify-center mx-auto'>
        <NavBar />

        <LandingPage />
        <TechStack />
        <MyProjects />
      </div>









      <div className='mt-[280vh]'>
        space
      </div>

    </main>

  );
}
