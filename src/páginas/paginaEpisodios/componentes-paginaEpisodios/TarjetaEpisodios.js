import { Link } from "react-router-dom";
import '../css-paginaEpisodios/TarjetaEpisodios.css'



function TarjetaEpisodios({episodio}) {
    
    return (
         
        <div className="tarjetaEpisodios">
            <div className="texto">
                <p>{episodio.episode}</p>
                <p>{episodio.name}</p>
            </div>
            <Link to={`/episodios/${episodio.id}`}>
                <button className="boton-episodios">Ver Mas</button>
            </Link>
        </div>
        
    )
}

export default TarjetaEpisodios;