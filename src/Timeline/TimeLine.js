import React, { useState } from 'react'
import "./TimeLine.css"
import Sugestões from './Sugestões'
import Post from '../Posts/Post'

function TimeLine() {
  const [posts, setPosts] = useState ([ // renamed to posts (plural)
    {
      user: "Rodrigo Alves",
      postImage: "./Assets/Post/WillSmith.jpg",
      likes: 12,
      timespamp: "2d"
    },
    {
      user: "Lulo",
      postImage: "./Assets/Post/RideWide.jpg",
      likes: 13,
      timespamp: "12d"
    },
    {
      user: "BolsaNaro",
      postImage: "./Assets/Post/HandDraw.jpg",
      likes: 22,
      timespamp: "30min"
    },
  ]);
  return <div className='timeline'>
    <div className='timeline__esquerda'></div>
    <div className='timeline__post'>
      {posts.map(post => ( // use posts (plural) here
        <Post
        user={post.user} 
        postImage={post.postImage} 
        likes={post.likes}
        timespamp={post.timespamp} /> // pass the post props to the Post component
      ))}
    </div>
    <div className='timeline__direta'>
      <Sugestões />
    </div>
  </div>
}

export default TimeLine