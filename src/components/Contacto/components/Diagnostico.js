// Dependencies
import React, {Component} from 'react';
// Components
import Footer from '../../Global/Footer/Footer'
// Assets
import './Diagnostico.css'
class Diagnostico extends Component {
  render() {
    return (<div className="Diagnostico">
      <h2 className="text-center text-success">Solicita tu diagnóstico gratuito</h2>
      <p>Déjanos tus datos y dinos cómo podemos ayudarte. Te contáctaremos.</p>
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
          <label htmlFor="servicios-list">Servicio:</label>
          <select className="form-control SubContacto-frm-control" id="servicios-list">
            <option>Gestión integral de residuos sólidos</option>
            <option>Gestión integral de residuos peligrosos</option>
            <option>Estudios de impacto ambiental</option>
            <option>Modelamiento ambiental</option>
            <option>Sistemas de gestión ambiental</option>
            <option>Saneamiento básico</option>
            <option>Planes de saneamiento y manejo de vertimientos</option>
            <option>Educación para el desarrollo sostenible</option>
            <option>Innovación</option>
            <option>Sistemas de gestión de seguridad y salud en el trabajo</option>
            <option>Planes de emergencia</option>
            <option>Normatividad ambiental</option>
            <option>Informes de cumplimiento ambiental</option>
            <option>Licitaciones</option>
            <option>Auditorías internas</option>
          </select>
        </div>

        <div className="form-group SubContacto-form-group">
          <label htmlFor="comment">Comentarios:</label>
          <textarea className="form-control SubContacto-frm-control" rows="3" id="comment"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
      <Footer/>
    </div>)
  }
}
export default Diagnostico
