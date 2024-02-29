import React from 'react';
import '../css-menu/Boton.css';
import { Link } from 'react-router-dom';

function Boton({ texto }) {

  const textomin = texto.toLowerCase();

  return (
    <Link to={`/${textomin}Pagina/0`}>
      <button
        className='boton-menu'>
        {texto}
      </button>
    </Link>
  );
}

export default Boton;