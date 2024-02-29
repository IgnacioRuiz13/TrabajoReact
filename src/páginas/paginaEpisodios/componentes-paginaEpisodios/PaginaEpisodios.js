import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../../services/contenedorApi'
import TarjetaEpisodios from './TarjetaEpisodios'
import MenuEpisodios from "./MenuEpisodios";
import '../css-paginaEpisodios/PaginaEpisodios.css'
 
function PaginaEpisodios() {
    
    const [episodios, setepisodios] = useState([]);

    const {numPagina} = useParams();

    useEffect(() => { 
        API.getPaginaDeEpisodiosResult(numPagina).then(setepisodios)
    },[numPagina])

    console.log(episodios)

    return (
        <>
            <h1 className="titulo-pagina-episodios">e p i s o d i o s</h1>

            <div className="contenedor-episodios">
                {episodios.map(datepisodios => (
                    <TarjetaEpisodios key={datepisodios.id} episodio={datepisodios} />
                ))}
            </div>

            <MenuEpisodios />
        </>
    )
}

export default PaginaEpisodios;