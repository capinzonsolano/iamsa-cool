// Dependencies
import React, {Component} from 'react';
// Components
import itemsSubNosotros from '../../../Data/data-sub-nosotros'
import Footer from '../../Global/Footer/Footer'
// Assets
import './Tema.css'
class Tema extends Component {
  render() {
    //Seleccionamos el subservicio adecuado y lo guardamos en elemento
    const elemento = itemsSubNosotros.find(e => e.temaId === this.props.match.params.temaId)
    //El texto tiene el párrafo y los bullet points, acá los separamos
    const arrTexto = elemento.bullet.split("_")
    //Quitamos el primer elemento que es el párrafo
    const arrPar = arrTexto.shift()
    // Los elementos restantes son los items
    const arrItems = arrTexto
    return (<div className="Tema">
      <h2 className="Tema-title text-center text-success">{elemento.title}</h2>
      <p>{elemento.texto}</p>
      <div className="Tema-texto">
        <h6>{arrPar}</h6>
          <ul>
            {arrItems.map((i, key) => <li key={key}>{i}</li>)}
          </ul>
      </div>
      <Footer/>
    </div>)
  }
}
export default Tema
