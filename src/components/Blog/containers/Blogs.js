// Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database'
// Assets
import './Blogs.css'

class Blogs extends Component {
  state = {
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
  render() {
    return (
    // Article
    <div className="blogs">
      {
        this.state.blogs.map((blog, index) => {
          return (
          //Entradas
          <Link to={`${this.props.match.url}/${blog.link}`} key={index} className="blogs-link">
            <h4 className="blogs-titulo">{blog.titulo}</h4>
            <p className="blogs-datos">
              <span className="blogs-autor">{blog.autor}</span>
              <span className="blogs-fecha">{blog.fecha}</span>
            </p>
            <p className="blogs-contenido">{blog.contenido}</p>
          </Link>)
        })
      }
    </div>)
  }
}

export default Blogs;
