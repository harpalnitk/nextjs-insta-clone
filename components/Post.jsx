import { db } from '@/firebase';
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

//import { useSession } from 'next-auth/react';


import CommentInputBox from './CommentInputBox';
import CommentsList from './CommentsList';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { userState } from '@/atom/userAtom';


export default function Post({ id, username, userImg, caption, img }) {
 // const { data: session } = useSession();
  const [hasLiked,setHasLiked] = useState(false);
  const [likes,setLikes] = useState([]);

  const [currentUser] = useRecoilState(userState);

  useEffect(()=>{
const unsubscribe = onSnapshot(
  collection(db,'insta-posts',id,'likes'),
  (snapshot) => {setLikes(snapshot.docs)}
)
return unsubscribe;
  },[db,id]);

  useEffect(()=>{
setHasLiked(
  likes.findIndex(like => like.id  === currentUser?.uid ) !== -1
)
  },[likes,currentUser])

  const sendComment = async (comment) => {
    await addDoc(collection(db, 'insta-posts', id, 'comments'), {
      comment: comment,
      username: currentUser?.username,
      userImage: currentUser?.userImg,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    //we are modifying ,so setdoc used instead of addodc
    if(hasLiked){
      await deleteDoc(doc(db,'insta-posts',id,'likes',currentUser?.uid))
    }else{
      await setDoc(doc(db,'insta-posts',id,'likes',currentUser?.uid),{
        username:currentUser?.username
      })
    }
  }

  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* post header  */}

      <div className='flex items-center p-5'>
        <Image
          className='h-12 w-12 rounded-full object-cover border p-1 mr-3'
          src={userImg}
          alt={username}
          width={100}
          height={100}
        />
        <p className='font-bold flex-1'>{username}</p>
        <EllipsisHorizontalIcon className='h-5' />
      </div>

      {/* post image  */}
      <Image className='object-cover w-full' src={img} alt={caption}
      width={500} 
      height={500}/>

      {/* post buttons  */}

      {currentUser && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            {hasLiked ? (<HeartIconSolid onClick={likePost} className='text-red-400 btn' />):
            ( <HeartIcon onClick={likePost} className='btn' />)}
            
           
            <ChatBubbleOvalLeftEllipsisIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/*NUmber of Likes*/}
      {likes.length > 0 && (
        <p className='p-5 font-bold mb-1'>{likes.length} likes</p>
      )}

      {/* post caption  */}

      <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span>
        {caption}
      </p>

      {/* Comments List */}
      <CommentsList id={id}/>


      {/* comment input box  */}

      {currentUser && (
       <CommentInputBox onPost={sendComment}/>
      )}
    </div>
  );
}
