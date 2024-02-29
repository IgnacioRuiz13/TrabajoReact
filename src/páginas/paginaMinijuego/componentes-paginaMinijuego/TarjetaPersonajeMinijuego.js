import React, { useState } from 'react';
import '../css-paginaMinijuego/TarjetaPersonajeMinijuego.css';

function TarjetaPersonajeMinijuego({personaje}) {
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);

    const verificarRespuesta = (estado) => {
        if (estado === personaje.status) {
            setRespuestaCorrecta(true);
        } else {
            setRespuestaCorrecta(false);
        }
    };

    return (
        <div className={`tarjetaMiniJuego ${respuestaCorrecta === true ? 'correcto' : respuestaCorrecta === false ? 'incorrecto' : ''}`}>
            <div className="texto">
                <img src={`${personaje.image}`} className="imagen-minijuego" alt='Foto del personaje' />
                <h1>{personaje.name}</h1>
                <p>{personaje.species}</p>
            </div>
            <div>
                <button className="boton-minijuego" id="Alive" onClick={() => verificarRespuesta('Alive')}>Vivo</button>
                <button className="boton-minijuego" id="Dead" onClick={() => verificarRespuesta('Dead')}>Muerto</button>
                <button className="boton-minijuego" id="unknown" onClick={() => verificarRespuesta('unknown')}>Desconocido</button>
            </div>
        </div>
    );
}

export default TarjetaPersonajeMinijuego;
