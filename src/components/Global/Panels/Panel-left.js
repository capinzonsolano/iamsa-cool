// Dependencies
import React from 'react';
// Assets
import './Panels.css'

const PanelLeft = props =>
  <div className={props.active ? 'col-12 col-md-4 col-lg-3 PanelLeft PanelLeft-show': 'col-12 col-md-4 col-lg-3 PanelLeft PanelLeft-hide'}>
    <div className="Fantasma"></div>
    {props.children}
  </div>


export default PanelLeft;
