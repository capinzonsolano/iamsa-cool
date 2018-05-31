import React, {Component} from 'react';
import ProcessIcon from '../Icons/process-icon.js';
import './Proceso-paso.css'

let colors = [
  "#06a741",
  "#297797",
  "#C0392B",
  "#00958E",
  "#c3717e",
  "#516d7e",
  "#74b467",
  "#2E4053",
  "#E74C3C",
  "#87002F",
  "#8AC2FF"
]
export default class ProcesoPaso extends Component {
  render() {
    return (<div className="ProcessStep-container">
      <div className="ProcessStep">
        <ProcessIcon color={colors[this.props.id]} alto="140" ancho="280" viewbox = "0 0 40 20"/>
        <h5 className="ProcessStep-Step">
          {this.props.id + 1}
        </h5>
        <div className="ProcessStep-BoxText">
          <p className="ProcessStep-Text">
            {this.props.texto}
          </p>
        </div>
      </div>
    </div>)
  }
}
