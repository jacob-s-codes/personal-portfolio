import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
// import { SpotlightBorder } from './components/SpotlightBorder';
import TechStack from './components/TechStack';
import MyProjects from './components/MyProjects';




export default function Home() {

  
  return (
    <main className='text-white z-10 orbitron'>

      <NavBar/>
      
      <LandingPage/>
      <TechStack/>
      <MyProjects/>
      

      
      
      


      <div className='mt-[280vh]'>
    space
      </div>

    </main>

  );
}
