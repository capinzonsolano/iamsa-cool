// Dependencies
import React from 'react'
import {Link} from 'react-router-dom'
// Components
import PanelLeft from '../Global/Panels/Panel-left'
import PanelRight from '../Global/Panels/Panel-right'
//Routes
import SubNosotrosRoutes from './routes/routes';
// Assets
import '../panel-text.css'
// Data
import itemsNosotros from '../../Data/data-nosotros';

class Nosotros extends React.Component {
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
          <Link to='/Nosotros' className='Link' onClick={this.handleClick}>
            <h2 className='text-center text-success'>Nosotros</h2>
          </Link>
          <Link to={`${this.props.match.url}/Equipo`} className='SubItem Link' onClick={this.handleClick}>
            <span className='SubItem-span'>
              Equipo
            </span>
          </Link>
          {
            itemsNosotros && itemsNosotros.map((item, key) => {
              return (
                <Link to={`${this.props.match.url}${item.url}`} key={key} className='SubItem Link' onClick={this.handleClick}>
                  <span className='SubItem-span'>
                    {item.title}
                  </span>
                </Link>)
            })
          }
        </PanelLeft>
        <PanelRight handleClick={this.handleClick} active={this.state.active} seccion="Nosotros">
          <SubNosotrosRoutes match={this.props.match}/>
        </PanelRight>
      </div>
    </div>);
  }
}

export default Nosotros;
