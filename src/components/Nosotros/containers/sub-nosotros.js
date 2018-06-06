// Dependencies
import React, {Component} from 'react';
// import {Link} from  'react-router-dom'
// Components
import FondoMovil from '../../Global/Fondo-Movil/fondo-movil';
import Portada from '../../Global/Portada/Portada';
// Assets
import './sub-nosotros.css'
class SubNosotros extends Component {
  render() {
    return (
      <Portada>
        <div className="SubNosotros">
          <div className="SubNosotros-content">
            Conócenos, nosotros trabajamos para que tu negocio crezca y sea ambiental y socialmente responsable

          </div>
        </div>
        <div className="Home-fantasma"></div>
        <FondoMovil/>
      </Portada>
  )
  }
}
export default SubNosotros
