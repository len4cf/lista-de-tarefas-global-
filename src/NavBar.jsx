import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
<div className="nav-bar">
        <Link to="/">
          <button className='nav-bar-button'>Página Inicial</button>
        </Link>
        <Link to="/adicionar">
          <button className='nav-bar-button'>Adicionar</button>
        </Link>
        <Link to="/marcar">
          <button className='nav-bar-button'>Marcar</button>
        </Link>
        <Link to="/listar">
          <button className='nav-bar-button'>Listar</button>
        </Link>
      </div>

  )
}

export default NavBar