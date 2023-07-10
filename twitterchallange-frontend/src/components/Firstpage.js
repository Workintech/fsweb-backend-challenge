import React from 'react'
import { useNavigate } from 'react-router-dom'

function Firstpage() {
  const navigate =useNavigate();

  return (
      <nav id="firstPageMainContainer">
          <button onClick={()=>{
            navigate('/login')
          }}>Giriş</button>
          <button onClick={()=>{
          navigate('/register')
          }}>Kayıt</button>
      </nav>  
  )
}

export default Firstpage