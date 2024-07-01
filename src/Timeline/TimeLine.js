import React from 'react'
import "./TimeLine.css"
import Sugestões from './Sugestões'

function TimeLine() {
  return <div className='timeline'>
    <div className='timeline__esquerda'> timeline</div>
    <div className='timeline__direta'>
      <Sugestões />
    </div>
  </div>

}

export default TimeLine