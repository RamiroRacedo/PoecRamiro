import { type } from 'os';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

type PropsBoton = {
  name: string;
  link: string;
};

function BotonReutilisable( { link, name }: PropsBoton) {
  return (
    <div>
      <button>
        <a href="https://classroom.google.com/u/0/c/Mjg0MDIzNjg3MTQ4">Classroom</a>
      </button>
      <button>
        <a href="https://github.com/">GitHub</a>
      </button>
    </div>
  );
}


export default BotonReutilisable;
