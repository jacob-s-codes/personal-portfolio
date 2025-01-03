import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
// import { SpotlightBorder } from './components/SpotlightBorder';
import TechStack from './components/TechStack';
import MyProjects from './components/MyProjects';







export default function Home() {


  return (
    <main className={` z-10   w-full `}>
      <div className=' flex flex-col justify-center mx-auto'>
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
