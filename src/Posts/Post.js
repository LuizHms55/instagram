import React from 'react'
import "./Post.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";



function Post() {
  return <div className='Post'>

    <div className='Post__header'>
        <div className='AutorPost'>
            <img className='PerfilPost' src="./Assets/Perfil1.jpg" width={40}/>
            Rodrigo Alves . <span>8 min</span>
        </div>
    </div>
    <div className='Post__image'>
        <img src="./Assets/Post/WillSmith.jpg"/>
    </div>
    <div className='Post__footer'>
        <div className='Post__footerIcon'>
            <div className='Post_IconsMain'>
            <MdFavoriteBorder className='Post__Icon'/>
            <IoChatbubbleOutline className='Post__Icon'/>
            <IoPaperPlaneOutline className='Post__Icon' />
            </div>

            <div className='Post_IconsSave'>
            <FaRegBookmark className='Post_IconsSave'/>
            </div>
        </div>
        Curtido por 21 pessoas.
    </div>
    </div>

}

export default Post