import './App.css';
import MenuPrincipal from './páginas/menú/componentes-menu/MenuPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './páginas/paginaPrincipal/componentes-paginaPrincipal/PaginaPrincipal';

import PaginaPersonajes from './páginas/páginaPersonajes/componentes-paginaPersonajes/PaginaPersonajes'
import InformacionPersonajes from './páginas/páginaPersonajes/componentes-paginaPersonajes/InformacionPersonaje';

import PaginaLocalizacion from './páginas/paginaLocalizaciones/componentes-paginaLocalizacion/PaginaLocalizacion'
import InformacionLocalizacion from './páginas/paginaLocalizaciones/componentes-paginaLocalizacion/InformacionLocalizacion'

import PaginaEpisodios from './páginas/paginaEpisodios/componentes-paginaEpisodios/PaginaEpisodios'
import InformacionEpisodios from './páginas/paginaEpisodios/componentes-paginaEpisodios/InformacionEpisodios';

import PaginaMinijuego from './páginas/paginaMinijuego/componentes-paginaMinijuego/PaginaMinijuego';

function App() {

  return (
    <div className="App">
      <Router>
        <aside>
          <MenuPrincipal />
        </aside>

        <main>

          <Routes>
            
            <Route path='/' element={<PaginaPrincipal />} />

            <Route path='/personajesPagina/:numPagina' element={<PaginaPersonajes />} />
            <Route path='/personaje/:idPersonaje' element={<InformacionPersonajes />} />

            <Route path='/localizaciónPagina/:numPagina' element={<PaginaLocalizacion />} />
            <Route path='/localizacion/:idLocalizacion' element={<InformacionLocalizacion />} />

            <Route path='/episodiosPagina/:numPagina' element={<PaginaEpisodios />} />
            <Route path='/episodios/:idEpisodios' element={<InformacionEpisodios />} />

            <Route path='/minijuegoPagina/:num' element={<PaginaMinijuego />} />

          </Routes>

        </main>
      </Router>
    </div>
  );
}

export default App;
