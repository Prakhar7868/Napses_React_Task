import React from 'react';
import "./Navigation.css";
import { AiOutlineShoppingCart} from "react-icons/ai";

export const Navigation = () => {
  return (
    <div className='Navigation-bar'>
        <div className='nav-icon'>Fonditas </div>
        <ul className='Nav-list'>
            <li>Nosotros</li>
            <li>Fonditas</li>
            <li>Mapa </li>
            <li>Inscribírse</li>
            <li><span>Inicia sesión</span></li>
        </ul>
        <div className='cart'><AiOutlineShoppingCart className='cart-icon' /></div>     
    </div>

  )
}
