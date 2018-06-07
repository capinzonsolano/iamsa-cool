// Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database'
// Components
import PanelLeft from '../Global/Panels/Panel-left';
import PanelRight from '../Global/Panels/Panel-right';
import Entradas from './components/Entradas'
// Assets
import '../panel-text.css';
// Routes
import BlogRoutes from './routes/routes'

class Blog extends Component {
  state = {
    active: false,
    blogs: []
  }

  componentDidMount() {
    var firebaseRef = firebase.database().ref('/blogs/');

    firebaseRef.once('value').then((dataSnapshot) => {
      const blogsList = dataSnapshot.val()
      this.setState({
        //Datos de mi DB
        blogs: blogsList
      });
    });
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
          <Link to={`${this.props.match.url}/`} className="Link">
            <h2 className="text-center text-success">Blog</h2>
          </Link>
          {
            this.state.blogs.map((blog, index) => {
              return (
                //Entradas
                  <Entradas key={index} {...blog} onClick={this.handleClick} match={this.props.match}/>
              )
            })
          }
        </PanelLeft>
        <PanelRight handleClick={this.handleClick} active={this.state.active} seccion="Entradas">
          <BlogRoutes match={this.props.match}/>
        </PanelRight>
      </div>
    </div>);
  }
}

export default Blog;
