//Dependencies
import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
// Icons
import Nube from '../Animaciones/Nube';
import Sol from '../Animaciones/Sol';
// Assets
import './Portada.css'
const nubes = new Array(30).fill({})
const Portada = props =>
<div className="Portada">
  <CSSTransitionGroup transitionName="move" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
    {
      nubes.map((e, i) => {
        const style = {
          top: Math.floor((Math.random() * (70 - 0))) + 0 + "%",
          left: Math.floor((Math.random() * (100 - 0))) + 0 + "%",
          animationDelay: Math.floor(Math.random() * 5) + 0 + "s"
        }
        const alto = Math.floor(Math.random() * (140 - 40)) + 20;
        return (<Nube key={i} color="white" alto={alto} style={style}/>)
      })
    }
  </CSSTransitionGroup>
  <CSSTransitionGroup transitionName="appear" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
    <Sol color='yellow'alto='100' ancho='100'/>
  </CSSTransitionGroup>
  {props.children}
</div>
export default Portada
