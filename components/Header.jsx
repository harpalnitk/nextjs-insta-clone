import React from 'react';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';

import { useSession, signIn, signOut } from 'next-auth/react';
import { modalState } from '@/atom/modalAtom';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session, status } = useSession();
  //console.log('session', session);
  //for modal functionality using recoil redux like package
  const [open, setOpen] = useRecoilState(modalState);

  const router = useRouter();

  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        {/* Left  */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='/Instagram_logo_black.png'
            fill
            className='object-contain'
            alt='logo'
            onClick={()=>router.push('/')}
          />
        </div>
        <div className='cursor-pointer h-24 w-24 relative  lg:hidden'>
          <Image
            src='/Instagram_logo.png'
            fill
            className='object-contain'
            alt='logo'
            onClick={()=>router.push('/')}
          />
        </div>
        {/* Middle  */}
        <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
            <MagnifyingGlassIcon className='h-5 text-gray-500' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
          />
        </div>

        {/* Right  */}
        <div className='flex space-x-4 items-center'>
          <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' 
          onClick={()=>router.push('/')}
          />
          {session ? (
            <>
              <PlusCircleIcon 
              onClick={()=>setOpen(true)}
              className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
              <Image
                onClick={()=>signOut()}
                src={session.user.image}
                alt={session.user.name}
                className='h-10 w-10 rounded-full cursor-pointer'
                width={100}
                height={100}
              />
            </>
          ) : (
            <button onClick={()=>signIn()}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
