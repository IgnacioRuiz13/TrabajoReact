const API_URL = 'https://rickandmortyapi.com/api';
 
export async function getPaginaDePersonajesResult(numPag) {
    try {
        const response = await fetch(`${API_URL}/character?page=${numPag}`);
        const data = await response.json();

        return data.results;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getPaginaDePersonajesInfo(numPag) {
    try {
        const response = await fetch(`${API_URL}/character?page=${numPag}`);
        const data = await response.json();

        return data.info;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getPersonaje(numPersonaje) {
    try {
        const response = await fetch(`${API_URL}/character/${numPersonaje}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getCuatroPersonajes(num1,num2,num3,num4) {
 
    try {
        const response = await fetch(`${API_URL}/character/${num1},${num2},${num3},${num4}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

//https://rickandmortyapi.com/api/location?page=1
export async function getPaginaDeLocalizacionResult(numPag) {
    try {
        const response = await fetch(`${API_URL}/location?page=${numPag}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getPaginaDeLocalizacionInfo(numPag) {
    try {
        const response = await fetch(`${API_URL}/location?page=${numPag}`);
        const data = await response.json();
        return data.info;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getLocalizacion(numUbicacion) {
    try {
        const response = await fetch(`${API_URL}/location/${numUbicacion}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

//https://rickandmortyapi.com/api/episode?page=1
export async function getPaginaDeEpisodiosResult(numPag) {
    try {
        const response = await fetch(`${API_URL}/episode?page=${numPag}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getPaginaDeEpisodiosInfo(numPag) {
    try {
        const response = await fetch(`${API_URL}/episode?page=${numPag}`);
        const data = await response.json();
        return data.info;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

export async function getEpisodios(numEpisodios) {
    try {
        const response = await fetch(`${API_URL}/episode/${numEpisodios}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al cargar datos");
    }
}

