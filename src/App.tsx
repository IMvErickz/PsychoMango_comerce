import { useState } from 'react'
import Logo from './assets/manga.png'
import Car from './assets/carrinho-de-compras.png'
import './App.css'

function Head() {
  

  return (
    <header>
       <nav>
        <div className="nav-wrapper">
          <img id='logo' src={Logo} alt="" />
            <a href="#" className="brand-logo"><span id='psy'>PsychoMango</span></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html"><img id='car' src={Car} alt="" /></a></li>
              <li><a href="badges.html"><span id='psy'>Pedidos</span></a></li>
              <li><a href="collapsible.html"><span id='psy'>Perfil</span></a></li>
            </ul>
          </div>
       </nav>
    </header>
  )
}

export default Head
