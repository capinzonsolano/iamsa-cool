//Dependencies
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//Components
import BurguerButton from '../Widgets/BurguerButton'
//Assets
import './Header.css'
class Header extends Component{
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
    const {items} = this.props;
    return (
      <div className="Header-container">
        <div className="Header">
          <div className="Header-container-logo">
            <Link to='/'>
              <img src="../img/logo-iamsa-small.png" alt="Logo IAMSA" className="Header-logo"/>
            </Link>
          </div>
          <ul className={this.state.active ? 'Header-menu Header-menu-show': 'Header-menu Header-menu-hide'}>
            {
              items && items.map((item, key) =>
              <li
                className='Header-menu-item'
                key={key}
                >
                <Link
                  to={item.url}
                  className='Header-menu-link'
                  onClick={this.handleClick}
                  >
                  {item.title}
                </Link>
              </li>
            )}
          </ul>
          <div className="Header-btn">
            <BurguerButton
              active ={this.state.active}
              handleClick= {this.handleClick}
              seccion = 'Menú'
              />
          </div>
        </div>
      </div>)
  }
}
export default Header;
