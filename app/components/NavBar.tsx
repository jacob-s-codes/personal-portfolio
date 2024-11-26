import React from 'react'

const NavBar = () => {
  return (
    <header className='sticky top-4 py-4 px-4 z-50 text-white'>
        <div className='border-2 border-white rounded-xl py-4 w-full relative backdrop-blur-sm z-50'>
          <ul className="flex flex-row w-full items-center justify-between text-3xl">
            <div className='flex justify-end'>
              <li className="pl-24">Jacob Shaul</li>
            </div>
            <div className="hidden lg:flex lg:visible gap-28 items-center ">
              <li className='hover:text-blue-500 hover:cursor-pointer'>About</li>
              <li className='pr-24 hover:text-blue-500 hover:cursor-pointer'>Projects</li>
              
            </div>
          </ul>
        </div>
      </header>
  )
}

export default NavBar