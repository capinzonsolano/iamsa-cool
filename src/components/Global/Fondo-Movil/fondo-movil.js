import React from 'react';
import './fondo-movil.css'
export default function FondoMovil(props){
	return(
		<div className="FondoMovil" style={{backgroundImage:"url(../img/fondo-movil-arboles.png)"}}>
			<img className="FondoMovil-ciclista" src="./img/ciclista.png" alt="Ciclista IAMSA"/>
		</div>
	)
}
