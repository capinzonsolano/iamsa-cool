// Dependencies
import React from 'react';
// Components
import NubeIcon from '../Icons/nube-icon'
// Assets
import './Nube.css'

function Nube(props){
    return(
      <div className = 'Nube' style = {props.style}>
        <NubeIcon
          alto = {props.alto}
          viewbox ='0 0 100 65'
          color = {props.color}
          />
      </div>
    )
}

export default Nube;
