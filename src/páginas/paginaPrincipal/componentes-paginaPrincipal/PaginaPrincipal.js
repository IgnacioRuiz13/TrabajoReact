import { useState, useEffect } from "react";
import * as API from '../../../services/contenedorApi'
import TarjetaEpisodios from '../../paginaEpisodios/componentes-paginaEpisodios/TarjetaEpisodios'
import '../css-paginaPrincipal/PaginaPrincipal.css'
import imagencabecera from '../../../imagenes/cabecera-pagina-inicio.jpg'
import imagenagradecimientos from '../../../imagenes/pegatina-removebg-preview.png'

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PaginaPrincipal() {

    const [episodios, setepisodios] = useState([]);

    useEffect(() => {
        API.getPaginaDeEpisodiosInfo(1).then(data => {

            let num1 = generarNumeroAleatorio(1, data.count);

            API.getEpisodios(num1).then(setepisodios);
        });
    }, [])

    return (
        <div className="contenedor-pagina-principal">
            <h1> ¡B i e n v e n i d o!</h1>
            <img src={imagencabecera} alt="imagen-cabecera" className="imagen-cabecera" />
            <div className="episodio-recomendado">
                <h2>EPISODIO RECOMENDADO</h2>
                <TarjetaEpisodios episodio={episodios} />
            </div>

            <div className="agradecimientos">
                <h2>¡Gracias por acudir a nuestra página!</h2>
                <h3>Ignario Ruiz & Sandra Privado</h3>
                <img src={imagenagradecimientos} alt="imagen-agradecimientos" className="imagen-agradecimientos" />
            </div>
        </div>
    )
}

export default PaginaPrincipal;