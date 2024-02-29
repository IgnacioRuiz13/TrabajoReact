import * as API from '../../../services/contenedorApi'
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../css-paginaPersonajes/InformacionPersonaje.css'


function InformacionPersonajes() {

    const [personaje, setpersonaje] = useState([]);
    const navigate = useNavigate();
    const { idPersonaje } = useParams();

    useEffect(() => {
        API.getPersonaje(idPersonaje).then(setpersonaje).catch(error => console.log("Error al cargar los datos", error))
    }, [idPersonaje])

    console.log(personaje)
    /*Carga las paginas web antes de tener datos, poner async await */
    return (
        <div className='contenedor-informacion-personajes'>

            <div className='boton-h1-localizacion'>

                <h1>{personaje.name}</h1>
                <button onClick={() => navigate(-1)} className='boton-volver-informacion-personajes'> Volver</button>
            </div>


            {personaje.image ? <img src={`${personaje.image}`} className="imagen-info-personajes" alt='Foto del personaje' /> : <h1>"Sin datos"</h1>}

            <p><span>Estado: </span>{personaje.status ? personaje.status : "Sin datos"}</p>
            <p><span>Especie: </span>{personaje.species ? personaje.species : "Sin datos"}</p>
            <p><span>Tipo: </span>{personaje.type ? personaje.type : "Sin datos"}</p>
            <p><span>Género: </span>{personaje.gender ? personaje.gender : "Sin datos"}</p>


            <div className='origen-personajes'>
                <p><span>Origen: </span>{personaje.origin ? personaje.origin.name : "Sin datos"}</p>

                {personaje.origin ?
                    personaje.origin.name !== "unknown" ?
                        <Link to={`/localizacion/${personaje.origin.url.substring(41)}`}>
                            <button className="boton-vermas-info-personajes">Ver Mas</button>
                        </Link> : <h1>Desconocido</h1>
                    : <h1>Sin datos</h1>
                }

            </div>

            <div className='localizacion-personajes'>
                <p><span>Localización: </span>{personaje.location ? personaje.location.name : "Sin datos"}</p>
                {personaje.location ?
                    personaje.location.name !== "unknown" ?
                        <Link to={`/localizacion/${personaje.location.url.substring(41)}`}>
                            <button className="boton-vermas-info-personajes">Ver Mas</button>
                        </Link> : <h1>Desconocido</h1>
                    : <h1>Sin datos</h1>
                }
            </div>





            <h2>Episodios donde lo encontramos:</h2>
            {personaje.episode ?
                personaje.episode.map(datoepisodio => (
                    <div key={datoepisodio} className='episodios-personajes'>

                        <Link to={`/episodios/${datoepisodio.substring(40)}`} className="enlace-episodios">
                            <p>{datoepisodio}</p>
                        </Link>
                    </div>
                )) : <p>Sin datos</p>

            }


        </div>
    )
}

export default InformacionPersonajes;

