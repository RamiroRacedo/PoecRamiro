import { type } from 'os';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import Profile from './views/Profile';

type PropsBoton = {
  name: string;
  link: string;
};

function BotonReutilisable( { link, name }: PropsBoton) {
  return (
    <div>
      <h1>HOLA2</h1>
      <button>
        <a href="https://classroom.google.com/u/0/c/Mjg0MDIzNjg3MTQ4">Classroom</a>
      </button>
      <button>
        <a href="https://github.com/RamiroRacedo/PoecRamiro">GitHub</a>
      </button>
    </div>
  );
}
export default BotonReutilisable;
