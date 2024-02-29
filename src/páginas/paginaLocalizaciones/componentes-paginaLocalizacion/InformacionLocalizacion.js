import * as API from '../../../services/contenedorApi'
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../css-paginaLocalizacion/InformacionLocalizacion.css"

function InformacionLocalizacion() {

    const [localizacion, setlocalizacion] = useState([]);
    const navigate = useNavigate();

    const { idLocalizacion } = useParams();
    console.log(idLocalizacion)

    useEffect(() => {
        API.getLocalizacion(idLocalizacion).then(setlocalizacion).catch(error => console.log("Error al cargar los datos", error))
    }, [idLocalizacion])

    console.log(localizacion)

    return (
        <div className='contenedor-informacion-localizacion'>
            <div className='boton-h1-localizacion'>
    
                <h1>{localizacion.name ? localizacion.name : "Sin datos"}</h1>
                <button onClick={() => navigate(-1)} className='boton-volver-informacion-localizacion'> Volver</button>
            </div>
            <p><span>Tipo: </span>{localizacion.type ? localizacion.type : "Sin datos"}</p>
            <p><span>Dimensión: </span>{localizacion.dimension ? localizacion.dimension : "Sin datos"}</p>

            <h2>Personajes Que Encontramos:</h2>
            {localizacion.residents ?
                localizacion.residents.map(datopersonaje => (
                    <div key={datopersonaje} className='personajes-localizacion'>

                        <Link to={`/personaje/${datopersonaje.substring(42)}`} className="enlace-localizacion">
                            <p>{datopersonaje}</p>
                        </Link>
                    </div>
                )) : <p>Sin datos</p>

            }
        </div>
    )
}

export default InformacionLocalizacion;