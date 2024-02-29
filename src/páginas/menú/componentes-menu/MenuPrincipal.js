import React from "react";
import Boton from "./Boton";
import '../css-menu/menuPrincipal.css';
import logotipo from '../../../imagenes/logotipo.png';
import { Link } from "react-router-dom";


function MenuPrincipal() {

  return (
    <>
      <Link to={'/'}>
        <img src={logotipo} alt="imgLogo" />
      </Link>

      <div className='fondo-boton-menu-principal'>
        <Boton texto='PERSONAJES' />
      </div>
      <div className='fondo-boton-menu-principal'>
        <Boton texto='LOCALIZACIÓN' />
      </div>
      <div className='fondo-boton-menu-principal'>
        <Boton texto='EPISODIOS' />
      </div>
      <div className='fondo-boton-menu-principal'>
        <Boton texto='MINIJUEGO' />
      </div>
    </>
  )
}

export default MenuPrincipal;