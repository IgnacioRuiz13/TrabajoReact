import { useState, useEffect } from "react";
import TarjetaPersonajes from "./TarjetaPersonajes";
import MenuPersonajes from "./MenuPersonajes";
import * as API from '../../../services/contenedorApi';
import '../css-paginaPersonajes/paginaPersonajes.css';
import { useParams } from "react-router-dom";

function PaginaPersonajes() {
    const [personajes, setPersonajes] = useState([]);
    const [personajesFiltrados, setPersonajesFiltrados] = useState([]);
    const [filtroGenero, setFiltroGenero] = useState("All");
    const [filtroEspecie, setFiltroEspecie] = useState("All");
    const { numPagina } = useParams();

    useEffect(() => {
        API.getPaginaDePersonajesResult(numPagina)
            .then(data => {
                setPersonajes(data);
                setPersonajesFiltrados(data);
            })
    }, [numPagina])

    useEffect(() => {
        // Filtrar los personajes basados en los dos filtros
        const personajesFiltrados = personajes.filter(personaje => {
            const cumpleFiltroGenero = filtroGenero === "All" || personaje.gender === filtroGenero;
            const cumpleFiltroEspecie = filtroEspecie === "All" || personaje.species === filtroEspecie;
            return cumpleFiltroGenero && cumpleFiltroEspecie;
        });
        setPersonajesFiltrados(personajesFiltrados);
    }, [personajes, filtroGenero, filtroEspecie]);

    return (
        <>
            <h1 className="titulo-pagina-personajes">p e r s o n a j e s</h1>
            <div className="filtros-personajes">
                Filtrado por Género:
                <select className='buscadorGenero' name="buscadorGenero" value={filtroGenero} onChange={(e) => setFiltroGenero(e.target.value)}> 
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
                Filtra por Especie:
                <select className='buscadorEspecie' name="buscadorEspecie" value={filtroEspecie} onChange={(e) => setFiltroEspecie(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Human">Human</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                    <option value="Mythological Creature">Mythological Creature</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Animal">Animal</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="contenedormain">
                {personajesFiltrados.length ?
                    personajesFiltrados.map(datopersonaje => (
                        <TarjetaPersonajes key={datopersonaje.id} personaje={datopersonaje} />
                    )) :
                    <h1>No hay datos con esos criterios de búsqueda</h1>
                }
            </div>
            <MenuPersonajes />
        </>
    )
}

export default PaginaPersonajes;
