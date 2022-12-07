import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import BotonReusable from './views/Button';
import Home from './views/Home';

function App() {
  let titulo = 'Clase del POEC';

  return (
    <div className="Home">
      <h1>{titulo}</h1>
      <Home />
      <BotonReutilisable />
    </div>
  );
}

export default App;
