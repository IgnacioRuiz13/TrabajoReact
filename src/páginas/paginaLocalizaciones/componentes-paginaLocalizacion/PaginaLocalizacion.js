import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../../services/contenedorApi'
import TarjetaLocalizacion from './TarjetaLocalizacion'
import MenuLocalizacion from './MenuLocalizacion'
import '../css-paginaLocalizacion/PaginaLocalizaciones.css'
 
function PaginaUbicaciones() {
    
    const [ubicaciones, setubicaciones] = useState([]);

    const {numPagina} = useParams();

    useEffect(() => {
        API.getPaginaDeLocalizacionResult(numPagina).then(setubicaciones)
    },[numPagina])

    console.log(ubicaciones)

    return (
        <>
            <h1 className="titulo-pagina-localizacion">l o c a l i z a c i o n e s</h1>
            
            <div className="contenedor-localizaciones">
                {ubicaciones.map(datoubicacion => (
                    <TarjetaLocalizacion key={datoubicacion.id} ubicacion={datoubicacion} />
                ))}
            </div>

            <MenuLocalizacion />
        </>
    )
}

export default PaginaUbicaciones;