import {PlusIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Story({username,img,isUser}) {
  return (
    <div className='relative cursor-pointer group'>
        <Image 
        className='h-14 rounded-full p-[1.5px] border-red-500 border-2  group-hover:scale-110 transition-transform duration-200 ease-out' 
        src={img} alt={username}
        width={150}
        height={150} />
        {isUser && <PlusIcon 
        className='h-6 absolute top-4 left-4 text-white'/>}
        <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}
