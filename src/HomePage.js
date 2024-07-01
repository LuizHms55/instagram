import React from 'react'
import "./HomePage.css"
import NavEsquerda from './Navegação/NavEsquerda'
import TimeLine from './Timeline/TimeLine'

function HomePage() {
  return (
    <div className="homepage">
    <div className='homepage__nav'>
        <NavEsquerda />
    </div>

    <div className='homepage__timeline'></div>
        <TimeLine />
    </div>
  )
}
export default HomePage