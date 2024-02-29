import { useParams, Link } from "react-router-dom";
import '../css-paginaPersonajes/menuPersonajes.css'
import { useState, useEffect } from "react";
import * as API from '../../../services/contenedorApi';

function MenuPersonajes() {

    const [infopaginapersonajes, setinfopaginapersonajes] = useState([]);

    let { numPagina } = useParams()

    useEffect(() => {
        API.getPaginaDePersonajesInfo(numPagina).then(setinfopaginapersonajes)
    }, [numPagina])

    console.log(infopaginapersonajes)

    return (
        <>
            <div className="contenedor-menu-localizaciones">
                <Link to={`/personajesPagina/${parseInt(numPagina) - 1 <= 0 ? numPagina = 1 : parseInt(numPagina) - 1}`}>
                    <button className="boton-menu-paginas" id="btnatras">Anterior</button>
                </Link>

                <p>Numero de Pagina: {numPagina} de {infopaginapersonajes.pages}</p>

                <Link to={`/personajesPagina/${parseInt(numPagina) + 1 <= infopaginapersonajes.pages ? parseInt(numPagina) + 1 : numPagina = infopaginapersonajes.pages}`}>
                    <button className="boton-menu-paginas">Siguiente</button>
                </Link>
            </div>
        </>
    )
}

export default MenuPersonajes;