import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';


export default function Home() {

  
  return (
    <main className='text-gray-300'>
      <NavBar/>
      <LandingPage/>

      <div className='mt-[280vh]'>
    space
      </div>

    </main>

  );
}
