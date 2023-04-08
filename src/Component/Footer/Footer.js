import React from 'react'
import "./Footer.css";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
    <div className='Footer'>
      <div className='Footer-section'>
        <div className='Footer-part-1'>
            <div className='Te-apasiona'>
                Te apasiona ayudara <br/>tu comunidad?
            </div>
            <div className='footerFonditas'>
                Fonditas
            </div>
        </div>
        <div className='Footer-part-2'>
            <div className='menu'>
                MENU
            </div>
            <div className='list'>
            <p>Nosotros</p>
            <span>Fonditas</span>
            </div>
        </div>
        <div className='Footer-part-3'>
            <p>Mapa</p>
            <span>Subir</span>
        </div>
        <div className='Footer-part-4'>
            <div className='Suscríbete'>
                <p>Suscríbete</p>
            </div>
            <div className='input-section'>
                <input type='text' className='footer-input' placeholder='Tu e-mail'/>
                <button><TbBrandTelegram className='telegramicon' /></button>
            </div>
        </div>
      </div>
      <hr/>
        <div className='mini-footer'>
            <span className='Términos'>Términos y condiciones</span>
            <span className='Privacidad'>Privacidad</span>
            <span className='Copyright'>© 2020 Fonditas</span>
        </div>
    </div>
    </div>
  )
}

export default Footer
