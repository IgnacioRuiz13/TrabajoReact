import { useState, useEffect } from "react";
import * as API from '../../../services/contenedorApi'
import TarjetaPersonajeMinijuego from "./TarjetaPersonajeMinijuego";
import '../css-paginaMinijuego/PaginaMinijuego.css'

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PaginaMinijuego() {

    const [personajes, setpersonajes] = useState([]);


    useEffect(() => {
        obtenerPersonajesAleatorios();
    }, [])

    console.log(personajes)

    const obtenerPersonajesAleatorios = () => {
        API.getPaginaDePersonajesInfo(1).then(data => {

            let num1 = generarNumeroAleatorio(1, data.count);
            let num2 = generarNumeroAleatorio(1, data.count);
            let num3 = generarNumeroAleatorio(1, data.count);
            let num4 = generarNumeroAleatorio(1, data.count);

            API.getCuatroPersonajes(num1, num2, num3, num4).then(setpersonajes);
        });
    }

    return (
        <>
            <h1 className="titulo-pagina-minijuego">m i n i j u e g o</h1>
            <div className="contenedor-texto-minijuego">
                <h3 className="h3-minujuego">¿Acertarás el estado en el que se encuentran todos nuestros personajes?</h3>
                <h3 className="h3-minujuego">¡ADELANTE!</h3>
            </div>
            <div className="contenedormain">
                {personajes.map(datopersonaje => (
                    <TarjetaPersonajeMinijuego key={datopersonaje.id} personaje={datopersonaje} />
                ))}
            </div>
            <button className="boton-recargar" onClick={obtenerPersonajesAleatorios}>
                Recargar
            </button>
        </>
    )
}

export default PaginaMinijuego;
