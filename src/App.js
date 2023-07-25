import './App.css';
import HomePage from "./Pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import PokemonPage from "./Pages/PokemonPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/Busqueda'} element={<SearchPage />} />
        <Route path={'/Pokemon'} element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
