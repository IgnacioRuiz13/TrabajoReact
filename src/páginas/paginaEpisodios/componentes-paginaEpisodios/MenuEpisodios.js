import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from '../../../services/contenedorApi';

function MenuEpisodios() {

    const [infopaginaepisodios, setinfopaginaepisodios] = useState([]);

    let { numPagina } = useParams()

    useEffect(() => {
        API.getPaginaDeEpisodiosInfo(numPagina).then(setinfopaginaepisodios)
    }, [numPagina])

    return (
        <>
            <div className="contenedor-menu-localizaciones">
                <Link to={`/episodiosPagina/${parseInt(numPagina) - 1 <= 0 ? numPagina = 1 : parseInt(numPagina) - 1}`}>
                    <button className="boton-menu-paginas" id="btnatras">Anterior</button>
                </Link>

                <p>Numero de Pagina: {numPagina} de {infopaginaepisodios.pages}</p>

                <Link to={`/episodiosPagina/${parseInt(numPagina) + 1 <= infopaginaepisodios.pages ? parseInt(numPagina) + 1 : numPagina = infopaginaepisodios.pages}`}>
                    <button className="boton-menu-paginas">Siguiente</button>
                </Link>
            </div>
        </>
    )
}

export default MenuEpisodios;