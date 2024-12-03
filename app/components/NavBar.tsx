'use client'
import React from 'react';
import CryptoText from './CryptoText';


const NavBar: React.FC = () => {
  

  return (
    <header className="sticky top-4 py-4 px-4 z-50 text-white">
      <div className="border-2 border-white rounded-xl py-4 w-full relative backdrop-blur-sm z-50">
        <ul className="flex flex-row w-full items-center justify-between text-3xl">
          <div className="flex justify-end">
            <li className="ml-24">
              <CryptoText text="Jacob Shaul" className="crypto-text hover:text-blue-500" />
            </li>
          </div>
          <div className="hidden lg:flex lg:visible gap-28 items-center ">
            <CryptoText text="About" className="hover:text-blue-500" />
            <CryptoText text="Projects" className="hover:text-blue-500 mr-24" />
          </div>
          <div className="visible lg:hidden hover:cursor-pointer text-6xl mr-24 mb-4">
            <p className='hover:text-blue-500'>&#9776;</p>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
