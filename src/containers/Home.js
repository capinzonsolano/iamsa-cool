//Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// Components
import FondoMovil from '../components/Global/Fondo-Movil/fondo-movil';
import Footer from '../components/Global/Footer/Footer';
import Portada from '../components/Global/Portada/Portada'
//Assets
import './Home.css';
// Data
import itemsHome from '../Data/data-home'

class Home extends Component {
  render() {
    return (<div className="Home-container">
      <div className="Fantasma"></div>
        <div className="Home container">
          <Portada>
          <div className="Home-titulos bg-white">
            <h1 className="text-center text-success">IAMSA Solutions</h1>
            <h3 className="text-secondary font-italic">Consultoría ambiental e innovación</h3>
          </div>
          <div className="Home-contenido">
            <div className="Home-contenido-cards">
              {
                itemsHome && itemsHome.map((e, i) => {
                  return (
                  <div className="card Home-card" key={i}>
                    <div className="card-body">
                      <h6>{e.title}</h6>
                      <p>{e.texto}</p>
                    </div>
                    <div className="card-footer">
                      <Link to={e.url}>
                        <button className="btn btn-success">{e.btn}</button>
                      </Link>
                    </div>
                  </div>)
                })
              }
            </div>
          </div>
          <div className="Home-fantasma"></div>
          <FondoMovil/>
        </Portada>
        </div>
      <Footer/>
    </div>)
  }
}

export default Home;
