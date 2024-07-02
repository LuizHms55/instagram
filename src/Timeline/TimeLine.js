import React from 'react'
import "./TimeLine.css"
import Sugestões from './Sugestões'
import Post from '../Posts/Post'

function TimeLine() {
  return <div className='timeline'>
    <div className='timeline__esquerda'></div>
    <div className='timeline__post'>
      <Post />
    </div>
    <div className='timeline__direta'>
      <Sugestões />
    </div>
  </div>

}

export default TimeLine