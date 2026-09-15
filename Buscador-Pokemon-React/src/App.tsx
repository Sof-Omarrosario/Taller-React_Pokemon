import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { registroUsuario } from './components/registroUsuario';
import { buscadorPokemon } from './components/buscadorPokemon';
import { inventarioPokemon } from './components/inventarioPokemon';

function app(){
  return(
    <PokemonProvider>
      <BrowserRouter>
        <header>
          <h1> Registro de Entrenadores y Pokemon en React </h1>
          <nav>
            <NavLink to="/registro" className={(isActive) => (isActive? 'active-tab' : '')}> Registro </NavLink>
            <NavLink to="/buscador" className={(isActive) => (isActive? 'active-tab' : '')}> Buscador </NavLink>
            <NavLink to="/inventario" className={(isActive) => (isActive? 'active-tab' : '')}> Inventario </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/registro"> replace />} />
            <Route path="/registro" element={<registroUsuario />} />
            <Route path="/buscador" element={<buscadorPokemon />} />
            <Route path="/inventario" element={<inventarioPokemon />} />
          </Routes>
        </main>
       
      </BrowserRouter>
    </PokemonProvider>
  );


}
 export default App;