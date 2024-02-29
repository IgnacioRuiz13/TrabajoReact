import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from '../../../services/contenedorApi';
import '../css-paginaLocalizacion/MenuLocalizacion.css'

function MenuUbicaciones() {

    const [infopaginalocalizaciones, setinfopaginalocalizaciones] = useState([]);

    let { numPagina } = useParams()

    useEffect(() => {
        API.getPaginaDeLocalizacionInfo(numPagina).then(setinfopaginalocalizaciones)
    }, [numPagina])

    return (
        <>
            <div className="contenedor-menu-localizaciones">
                <Link to={`/localizaciónPagina/${parseInt(numPagina) - 1 <= 0 ? numPagina = 1 : parseInt(numPagina) - 1}`}>
                    <button className="boton-menu-paginas" id="btnatras">Anterior</button>
                </Link>

                <p>Numero de Pagina: {numPagina} de {infopaginalocalizaciones.pages}</p>
                
                <Link to={`/localizaciónPagina/${parseInt(numPagina) + 1 <= infopaginalocalizaciones.pages ? parseInt(numPagina) + 1 : numPagina = infopaginalocalizaciones.pages}`}>
                    <button className="boton-menu-paginas">Siguiente</button>
                </Link>
            </div>

            


        </>
    )
}

export default MenuUbicaciones;