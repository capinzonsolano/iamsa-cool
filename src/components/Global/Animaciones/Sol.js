// Dependencies
import React from 'react';
// Components
import SolIcon from '../Icons/sol-icon'
// Assets
import './Sol.css'

function Sol(props){
    return(
      <div className = 'Sol'>
        <SolIcon
          viewbox ='0 0 100 100'
          alto = {props.alto}
          ancho = {props.ancho}
          color = {props.color}
          />
      </div>
    )
}

export default Sol;
