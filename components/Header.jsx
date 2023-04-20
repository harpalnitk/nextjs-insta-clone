import React from 'react';
import Image from 'next/image';
import {MagnifyingGlassIcon, PlusCircleIcon} from '@heroicons/react/24/outline';
import {HomeIcon} from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'>

<div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      {/* Left  */}
    <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
        <Image 
        src='/Instagram_logo_black.png'
        fill
        className="object-contain"
        alt='logo'/>
    </div>
    <div className='cursor-pointer h-24 w-24 relative  lg:hidden'>
        <Image 
        src='/Instagram_logo.png'
        fill
        className="object-contain"
        alt='logo'/>
    </div>
 {/* Middle  */}
<div className='relative mt-1'>
  <div className='absolute top-2 left-2'>
    <MagnifyingGlassIcon className='h-5 text-gray-500'/>
  </div>
  <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
</div>

{/* Right  */}
<div className='flex space-x-4 items-center'>
<HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
<PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
<img src='/marty-avatar.png' alt='User Image' className='h-10 rounded-full cursor-pointer'/>
</div>
</div>
    </div>
      



    
  )
}
