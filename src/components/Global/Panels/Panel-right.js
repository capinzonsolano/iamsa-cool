// Dependencies
import React from 'react';
//Components
import BurguerButton from '../Widgets/BurguerButton'
// Assets
import './Panels.css'

function  PanelRight(props)  {
  return (
    <div className="col-12 col-md-8 col-lg-9 PanelRight">
      <div className="Fantasma"></div>
        <div className={props.active
            ? 'Panel-btn Panel-btn-change'
            : 'Panel-btn'}>
          <BurguerButton
            active ={props.active}
            handleClick= {props.handleClick}
            seccion = {props.seccion}
            />
        </div>
      <div className="PanelRight-content">
        {props.children}
      </div>
    </div>)
}


export default PanelRight;
