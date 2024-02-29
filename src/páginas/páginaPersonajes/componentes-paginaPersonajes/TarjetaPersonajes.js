import '../css-paginaPersonajes/tarjetePersonaje.css'
import { Link } from 'react-router-dom';

function TarjetaPersonajes({ personaje }) {
 
    return (
        <div className="tarjetaPersonajes">
            <div className='contenedor-imagen-personaje'>
                <img src={`${personaje.image}`} className="imagen" alt='Foto del personaje' />
            </div>
            <div className='contenedor-texto-tarjeta-personaje'>
                <div className="texto">
                    <h1>{personaje.name}</h1>
                    <p>{personaje.species}</p>
                </div>
                <Link to={`/personaje/${personaje.id}`}>
                    <button className="boton-personajes" id='boton'>Ver Mas</button>
                </Link>
            </div>
        </div>

    )
}

export default TarjetaPersonajes;