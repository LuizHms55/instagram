import React from 'react'
import "./Sugestões.css"

function Sugestões() {
  return <div className='Sugestao'>
    <div className='SugestaoTitulo'>Sugeridos para você</div>
    <div className='SugestaoUsersName'>
      <div className='SugestaoUserName'>
        <div className='UserNamerEsquerda'>
          <span className='Avatar'>
            <img src='./Assets/Perfil2.jpg'/>
          </span>
        </div>
        <div className='user__info'>
        <span className='username'>Lulo</span>
        <span className='user__relacionado'>Novo no Instagram</span>
        </div>        
        <button className='Botao__seguir'>seguir</button>
      </div>
    </div>
  </div>
}

export default Sugestões