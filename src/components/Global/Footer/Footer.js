//Dependencies
import React from 'react';
// Assets
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (<div className='Footer row'>
        <div className="Footer-logo-container col-12 col-md-6">
          <img src="../img/logo-iamsa-expanded.png" alt="Logo IAMSA" className="Footer-logo"/>
        </div>
        <div className="col-12 col-md-6">
          <span className="Footer-datos">Nit: 901017791-0</span>
          <span className="Footer-datos">(+57) 311 458 13 13</span>
          <span className="Footer-datos">(+57) 319 701 61 75</span>
          <span className="Footer-datos">info@iamsasolutions.com</span>
        </div>
    </div>);
  }
}

export default Footer;
