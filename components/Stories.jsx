import {array,username} from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import Story from './Story';
// import { useSession} from 'next-auth/react';

import { useRecoilState } from 'recoil';
import { userState } from '@/atom/userAtom';
const  Stories = () => {
    const [storyUsers,setStoryUsers] = useState([]);

    // const { data: session, status } = useSession();

    const [currentUser] = useRecoilState(userState);

    useEffect(()=>{
      const storyUsers = array(20, (i) => (
        {
            username: username({locale:'en'}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
           
        }
      ))
      setStoryUsers(storyUsers);
      //console.log(storyUsers);
    },[]);
  
    return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
      {currentUser && (
         <Story 
         key={currentUser?.uid} 
         username={currentUser?.username}
         img={currentUser.userImg}
         isUser="true"/>
      )}
 {storyUsers.map((user) => (
 <Story 
 key={user.id} 
 username={user.username}
 img={user.img}/>))}
    </div>
 
  )
}

export default Stories;
