import { useState, useEffect } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';


export default function Posts() {

    const [posts,setPosts] = useState([]);

    //! TODO   fetch this on server using getServerSideProps
    useEffect(() => {
        //onsnapshot for real time updates from firestore
        const unsubscribe = onSnapshot(
            query(collection(db,'insta-posts'),orderBy("timestamp","desc")), (snapshot)=>{
                setPosts(snapshot.docs)
            }
        );
        //unsubscribe from the subscription
        return unsubscribe;
    },[db])

  return (
    <div>
{posts.map(post=> 
<Post 
    key={post.id}
    id={post.id}
    username={post.data().username}
    userImg={post.data().profileImg}
    img={post.data().image}
    caption={post.data().caption}
/>)}
    </div>
  )
}
