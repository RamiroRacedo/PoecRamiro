import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import imagen from './imagen.svg';
import './App.css';
import Menus from './components/Menus';
import Home from './views/Home';
import Profile from './views/Profile';
import BotonReutilizable from './views/Button';

export default function App() {
  const [title, setTitle] = useState<string>('Cargando');

  useEffect(() => {
    setTimeout(() => {
      setTitle('Clase de POEC');
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Menus />
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<Home title={title} />} />
        </Routes>
      </Router>
      <BotonReutilizable />
    </div>
  );
}

