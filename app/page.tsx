import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import { SpotlightBorder } from './components/SpotlightBorder';




export default function Home() {

  
  return (
    <main className='text-white z-10 orbitron'>

      <NavBar/>
      
      <LandingPage/>
      <div className='flex flex-row w-full items-center justify-center mt-96 z-0'>
        <SpotlightBorder className="h-[600px] w-96 flex flex-row items-center justify-center" spotlightColor="#0EA5E9">
          <h1>Text</h1>
        </SpotlightBorder>
      </div>

      <h1 className='roboto text-4xl'>Roboto?</h1>
      <h1 className='text-4xl'>None roboto</h1>
      
      


      <div className='mt-[280vh]'>
    space
      </div>

    </main>

  );
}
