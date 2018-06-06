// Dependencies
import React, {Component} from 'react';
import {Link} from  'react-router-dom'
// Components
import FondoMovil from '../../Global/Fondo-Movil/fondo-movil';
import Portada from '../../Global/Portada/Portada';
// Assets
import './sub-servicios.css'
class SubServicios extends Component {
  render() {
    return (
      <Portada>
        <div className="SubServicios">
          <div className="SubServicios-content">
            <Link to='/Servicios/ing1'>
              <img className="SubServicios-imgs-img" src="./img/servicios_iamsa_01.png" alt="IAMSA Servicios"/>
            </Link>
            <Link to='/Servicios/des1'>
              <img className="SubServicios-imgs-img" src="./img/servicios_iamsa_02.png" alt="IAMSA Servicios"/>
            </Link>
            <Link to='/Servicios/seg1'>
              <img className="SubServicios-imgs-img" src="./img/servicios_iamsa_03.png" alt="IAMSA Servicios"/>
            </Link>
            <Link to='/Servicios/cum1'>
              <img className="SubServicios-imgs-img" src="./img/servicios_iamsa_04.png" alt="IAMSA Servicios"/>
            </Link>
            <Link to='/Servicios/lic1'>
              <img className="SubServicios-imgs-img" src="./img/servicios_iamsa_05.png" alt="IAMSA Servicios"/>
            </Link>
          </div>
        </div>
        <div className="Home-fantasma"></div>
        <FondoMovil/>
      </Portada>
  )
  }
}
export default SubServicios
