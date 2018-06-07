// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';
// Assets
import './Entradas.css'

function Entradas(props) {
  return (
  // Article
  <Link to={`${props.match.url}/${props.link}`} className="entradas">
    <h6 className="entradas-titulo">{props.titulo}</h6>
    <p className="entradas-datos">
      <span className="entradas-autor">{props.autor}</span>
      <span className="entradas-fecha">{props.fecha}</span>
    </p>
  </Link>)
}

export default Entradas;
