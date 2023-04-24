//import { useSession,signOut} from 'next-auth/react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { userState } from '@/atom/userAtom';
import { getAuth, signOut } from 'firebase/auth';
export default function MiniProfile() {
  // const { data: session, status } = useSession();
  const [currentUser,setCurrentUser] = useRecoilState(userState);
  const auth = getAuth();

  const onSignOut = async () => {
    await signOut(auth);
    setCurrentUser(null);
  }
  const url = currentUser?.userImg;

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <Image 
        className = 'h-16 w-16 rounded-full border p-[2px]'
        src={url} alt={currentUser?.username || 'image'} 
        height={150}
        width={150}/>
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>{currentUser?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
        </div>
        <button onClick={onSignOut} className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}
