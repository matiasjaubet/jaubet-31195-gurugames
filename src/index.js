//Traigo la libreria de react
import React from 'react';
//Con ReactDOM puedo visualizar react en un navegador 
import ReactDOM from 'react-dom/client';
//Agarrar una app que ya exista de REACT
import App from './ui/layout/app/App';

import "./assets/css/index.css";


// mostramos la aplicacion
// Crea un punto inicial (root) en donde la app se va a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <App />);