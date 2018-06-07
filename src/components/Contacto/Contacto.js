// Dependencies
import React from 'react'
import {Link} from 'react-router-dom'
// Components
import PanelLeft from '../Global/Panels/Panel-left'
import PanelRight from '../Global/Panels/Panel-right'
//Routes
import SubContactoRoutes from './routes/routes';
// Assets
import '../panel-text.css';

class Contacto extends React.Component {
  state = {
    active: false
  }
  handleClick = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }
  render() {
    return (<div className="Items">
      <div className="row Items-row">
        <PanelLeft active={this.state.active}>
          <Link to='/Contacto' className='Link' onClick={this.handleClick}>
            <h2 className='text-center text-success'>Contacto</h2>
          </Link>
          <Link to={`${this.props.match.url}/diagnostico`} className='SubItem Link' onClick={this.handleClick}>
            <span className='SubItem-span'>
              Diagnóstico gratuito
            </span>
          </Link>
        </PanelLeft>
        <PanelRight handleClick={this.handleClick} active={this.state.active} seccion="Contacto">
          <SubContactoRoutes match={this.props.match}/>
        </PanelRight>
      </div>
    </div>);
  }
}

export default Contacto;
