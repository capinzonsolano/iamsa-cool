// Dependencies
import React, {Component} from 'react';
// import {Link} from  'react-router-dom'
// Components
import FondoMovil from '../../Global/Fondo-Movil/fondo-movil';
import Portada from '../../Global/Portada/Portada';
// Assets
import './sub-contacto.css'
class SubContacto extends Component {
  render() {
    return (<Portada>
      <div className="SubContacto">
        <div className="SubContacto-content">
          <div className="container">
            <h3 className="text-center text-success">Contacto</h3>
            <form action="/action_page.php">
              <div className="form-group SubContacto-form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="nombre" className="form-control SubContacto-frm-control" id="nombre" placeholder="Ingresa tu nombre" name="nombre"/>
              </div>
              <div className="form-group SubContacto-form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control SubContacto-frm-control" id="email" placeholder="Ingresa tu email" name="email"/>
              </div>
              <div className="form-group SubContacto-form-group">
                <label htmlFor="tel">Teléfono:</label>
                <input type="tel" className="form-control SubContacto-frm-control" id="tel" placeholder="Ingresa tu teléfono" name="tel"/>
              </div>
              <div className="form-group SubContacto-form-group">
                <label htmlFor="comment">Comentarios:</label>
                <textarea className="form-control SubContacto-frm-control" rows="3" id="comment"></textarea>
              </div>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <div className="Home-fantasma"></div>
      <FondoMovil/>
    </Portada>)
  }
}
export default SubContacto
