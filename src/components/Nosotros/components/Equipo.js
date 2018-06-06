// Dependencies
import React, {Component} from 'react';
// Components
import Footer from '../../Global/Footer/Footer'
// Assets
import './Equipo.css'
//Data
const EquipoIntegrantes = [
  {
    nombre: 'Diana Abella',
    img: './img/perfil-diana.png',
    perfil: 'Acá describimos brevemente a Diana',
    linkedin: 'https://www.linkedin.com/in/diana-fernanda-abella-diaz-3260a0165/'
  }, {
    nombre: 'Felipe Ramirez',
    img: './img/perfil-felipe.png',
    perfil: 'Acá describimos brevemente a Felipe',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A9s-felipe-ram%C3%ADrez-rojas-9a4325150/'
  }, {
    nombre: 'Ana Ramirez',
    img: './img/perfil-ana.png',
    perfil: 'Acá describimos brevemente a Ana',
    linkedin: 'https://www.linkedin.com/in/anamramirezg/'
  }, {
    nombre: 'Carlos Pinzón',
    img: './img/perfil-carlos.png',
    perfil: 'Acá describimos brevemente a Carlos',
    linkedin: 'https://www.linkedin.com/in/carlosapinzons/'
  }
]

class Equipo extends Component {
  render() {
    return (<div className="Equipo">
      <h1 className="text-center text-success">Equipo</h1>
      <div className="Equipo-cards">
        {
          EquipoIntegrantes.map((e, key) => {
            return (<div className="Equipo-card card" key={key}>
              <div className="Equipo-div-img">
                <img className="card-img-top" src={e.img} alt='Perfil IAMSA'/>
              </div>
              <div className="Equipo-card-body card-body">
                <h5 className="card-title">{e.nombre}</h5>
                <p className="card-text">{e.perfil}</p>
                <a href={e.linkedin} target="_blank" className="btn btn-success">Ver perfil</a>
              </div>
            </div>)
          })
        }
      </div>
      <Footer/>
    </div>)
  }
}

export default Equipo
