import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import {
    collection,
    onSnapshot,
    orderBy,
    query,
  } from 'firebase/firestore';
import CommentRow from './CommentRow';

export default function CommentsList(props) {

   // console.log('props',props)
   
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
          query(
            collection(db, 'insta-posts', props.id, 'comments'),
            orderBy('timestamp', 'desc')),
            (snapshot)=> {setComments(snapshot.docs)}
          
        );
    
        return unsubscribe;
      }, [db,props.id]);
  
      return (
        <>
            {
        comments.length > 0 && (
        <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
        {comments.map(comment => 
             (<CommentRow key={comment.id} 
          image={comment.data().userImage}
          username={comment.data().username}
          comment={comment.data().comment}
          timestamp={comment.data().timestamp}/>)
        
           
        
           )}
        </div>
      )
    }
        </>

  )
}
