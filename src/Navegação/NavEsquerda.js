import React from 'react'
import "./NavEsquerda.css"
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdSlideshow } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

function NavEsquerda() {
  return <div className='NavEsquerda'>
  <img className='NavEsquerdaLogo' src="./Assets/instagram.webp"/>
    <div className='NavBotoes'>

    <button className='Botao__Nav'>
      <MdHome className='Home'/>
        <span>Home</span>
      </button>

      <button className='Botao__Nav'>
      <FaSearch className='Home'/>
        <span>Search</span>
      </button>

      <button className='Botao__Nav'>
      <MdOutlineExplore className='Home'/>
        <span>Explorar</span>
      </button>

      <button className='Botao__Nav'>
      <MdSlideshow className='Home'/>
        <span>Reels</span>
      </button>

      <button className='Botao__Nav'>
      <FaFacebookMessenger className='Home'/>
        <span>Chat</span>
      </button>

      <button className='Botao__Nav'>
      <MdFavoriteBorder className='Home'/>
        <span>Notificações</span>
      </button>
  
      <button className='Botao__Nav'>
      <FaRegSquarePlus className='Home'/>
        <span>Criar</span>
      </button>
    </div>
  
    <div className='MenuNav'>
      <button className='Botao__Nav'>
      <IoMenu className='Home'/>
      <span>Mais</span>
      </button>
    </div>

  </div>

}

export default NavEsquerda