// Dependencies
import React from 'react';
// Assets
import './BurguerButton.css'

function BurguerButton(props) {
  return (<div className={props.active
      ? 'BurguerButton change'
      : 'BurguerButton'} onClick={props.handleClick}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="text-success">{props.seccion}</div>
  </div>)
}

export default BurguerButton;
