import * as API from '../../../services/contenedorApi'
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../css-paginaEpisodios/InformacionEpisodios.css'


function InformacionEpisodios(params) {

    const [episodio, setepisodio] = useState([]);
    const navigate = useNavigate();

    const { idEpisodios } = useParams();
    console.log(idEpisodios)

    useEffect(() => {
        API.getEpisodios(idEpisodios).then(setepisodio).catch(error => console.log("Error al cargar los datos", error))
    }, [idEpisodios])

    console.log(episodio)

    return (
        <div className='contenedor-informacion-episodios'>
            <div className='boton-h1-episodios'>
                <h1>{episodio.name ? episodio.name : "Sin datos"}</h1>
                <button onClick={() => navigate(-1)} className='boton-volver-informacion-episodios'> Volver</button>

            </div>

            <p><span>Fecha de Emisión: </span>{episodio.air_date ? episodio.air_date : "Sin datos"}</p>
            <p><span>Número de Episodio: </span>{episodio.episode ? episodio.episode : "Sin datos"}</p>

            <h2>Personajes Que Encontramos:</h2>
            {episodio.characters ?
                episodio.characters.map(datopersonaje => (
                    <div key={datopersonaje} className='personajes-episodio'>


                        <Link to={`/personaje/${datopersonaje.substring(42)}`} className="enlace-personajes">
                            <p>{datopersonaje}</p>
                        </Link>
                    </div>
                )) : <p>Sin datos</p>

            }

        </div>
    )
}

export default InformacionEpisodios;