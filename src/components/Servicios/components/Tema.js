// Dependencies
import React, {Component} from 'react';
// Components
import ProcesoPaso from '../../Global/Proceso/Proceso-paso'
import itemsSubServicios from '../../../Data/data-sub-servicios'
import Footer from '../../Global/Footer/Footer'
// Assets
import './Tema.css'
class Tema extends Component {
  render() {
    //Seleccionamos el subservicio adecuado y lo guardamos en elemento
    const elemento = itemsSubServicios.find(e => e.temaId === this.props.match.params.temaId)
    //El texto tiene el párrafo y los bullet points, acá los separamos
    const arrTexto = elemento.texto.split("-")
    //Quitamos el primer elemento que es el párrafo
    const arrPar = arrTexto.shift()
    // Los elementos restantes son los items
    const arrItems = arrTexto

    return (<div className="Tema">
      <h2 className="Tema-title text-center text-success">{elemento.title}</h2>
      <div className="Tema-texto">
        <p>{arrPar}</p>
        <ul>
          {arrItems.map((i, key) => <li key={key}>{i}</li>)}
        </ul>
      </div>
      <h5>¿Qué harémos?</h5>
      <button className="btn btn-success Tema-btn">
        Solicita tu diagnóstico gratuito
      </button>
      <div className="Tema-proceso">
        {
          itemsSubServicios && elemento.proceso.map((item, key) => {
            return (<ProcesoPaso {...item} key={key} id={key}/>)
          })
        }
      </div>
      <Footer/>
    </div>)
  }
}
export default Tema
