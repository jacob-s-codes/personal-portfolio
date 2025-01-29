'use client'
import React from 'react';
import CryptoText from './CryptoText';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-4 z-50 text-white max-w-[1800px] mx-auto">
      <div className="border-2 border-white hover:border-[#99E1D9] rounded-xl py-4 w-full relative backdrop-blur-sm z-50">
        <ul className="flex flex-row w-full items-center justify-between text-3xl">
          <div className="flex justify-end">
            <li className="ml-24">
              <Link href="/"><CryptoText text="Jacob Shaul" className="crypto-text hover:text-[#99E1D9]" /></Link>
            </li>
          </div>
          <div className="hidden lg:flex lg:visible gap-28 items-center ">
            <Link href="#projects" scroll={false}><CryptoText text="About" className="hover:text-[#99E1D9]" /></Link>
            <CryptoText text="Projects" className="hover:text-[#99E1D9] mr-24" />
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
