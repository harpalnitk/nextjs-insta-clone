import React from 'react'
import Post from './Post'

export default function Posts() {

    const posts = [
        {
            id: "1",
            username:'harpal_singh',
            userImg:'/marty-avatar.png',
            img:'/background-1.jpg',
            caption: 'Beautiful background picture for view'
        },
        {
            id: "2",
            username:'harpal_singh2',
            userImg:'/marty-avatar.png',
            img:'/background-2.jpg',
            caption: 'Beautiful background picture for view'
        },
        {
            id: "3",
            username:'harpal_singh3',
            userImg:'/marty-avatar.png',
            img:'/background-3.jpg',
            caption: 'Beautiful background picture for view'
        },
        {
            id: "4",
            username:'harpal_singh4',
            userImg:'/marty-avatar.png',
            img:'/background-4.jpg',
            caption: 'Beautiful background picture for view'
        },
    ]
  return (
    <div>
{posts.map(post=> 
<Post 
    key={post.id}
    id={post.id}
    username={post.username}
    userImg={post.userImg}
    img={post.img}
    caption={post.caption}
/>)}
    </div>
  )
}
