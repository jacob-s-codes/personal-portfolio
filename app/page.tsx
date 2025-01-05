import React from 'react';
import NavBar from './components/HomePage/NavBar';
import LandingPage from './components/HomePage/LandingPage';
// import { SpotlightBorder } from './components/SpotlightBorder';
import TechStack from './components/HomePage/TechStack';
import MyProjects from './components/HomePage/MyProjects';







export default function Home() {


  return (
    <main className={` z-8 w-full flex flex-col justify-center mx-auto`}>
      <div className=' '>
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
