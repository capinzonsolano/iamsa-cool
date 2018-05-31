// Dependencies
import React from 'react'
import {Link} from 'react-router-dom'
// Components
import PanelLeft from '../Global/Panels/Panel-left'
import PanelRight from '../Global/Panels/Panel-right'
//Routes
import SubServiciosRoutes from './routes/routes';
// Assets
import '../panel-text.css';
// Data
import itemsServicios from '../../Data/data-servicios';

class Servicios extends React.Component {
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
          <Link to='/Servicios' className='Link' onClick={this.handleClick}>
            <h2 className='text-center text-success'>Servicios</h2>
          </Link>
          {
            itemsServicios && itemsServicios.map((item, key) => {
              return (<div key={key}>
                <li className='Item'>
                  <span className="Item-span">
                    {item.title}
                  </span>
                </li>
                <ul className='SubItems'>
                  {
                    item.items.map((i, key) => {
                      return (<Link to={`${this.props.match.url}${i.url}`} key={key} className='SubItem Link' onClick={this.handleClick}>
                        <span className='SubItem-span'>
                          {i.title}
                        </span>
                      </Link>)
                    })
                  }
                </ul>
              </div>)
            })
          }
        </PanelLeft>
        <PanelRight handleClick={this.handleClick} active={this.state.active} seccion="Servicios">
          <SubServiciosRoutes match={this.props.match}/>
        </PanelRight>
      </div>
    </div>);
  }
}

export default Servicios;
