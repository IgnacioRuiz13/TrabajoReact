import { Link } from "react-router-dom";
import '../css-paginaLocalizacion/TarjetaLocalizacion.css'



function TarjetaUbicaciones({ubicacion}) {
    
    return (
        <>
        <div className="tarjetaLocalizaciones">
            <div className="texto">
                <h1>{ubicacion.name}</h1>
                <p>{ubicacion.type}</p>
            </div>
            <Link to={`/localizacion/${ubicacion.id}`}>
                <button className="boton-localizaciones">Ver Mas</button>
            </Link>
        </div>
        </>
    )
}

export default TarjetaUbicaciones;