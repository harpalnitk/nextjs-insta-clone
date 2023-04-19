import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      

<div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      {/* Left  */}
    <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
        <Image 
        src='/Instagram_logo_black.png'
        fill
        className="object-contain"/>
    </div>
    <div className='cursor-pointer h-24 w-24 relative  lg:hidden'>
        <Image 
        src='/Instagram_logo.png'
        fill
        className="object-contain"/>
    </div>
            {/* Middle  */}

{/* Right  */}
<h1>Right</h1>
</div>


    </div>
  )
}
