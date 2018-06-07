// Dependencies
import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database'
// Components
import Footer from '../../Global/Footer/Footer'
// Assets
import './BlogEntrada.css'

class BlogEntrada extends Component {
  state = {
    blogs: [],
    isLoaded: false
  }

  componentDidMount() {
    var firebaseRef = firebase.database().ref('/blogs/');

    firebaseRef.once('value').then((dataSnapshot) => {
      const blogsList = dataSnapshot.val()
      this.setState({
        //Datos de mi DB
        blogs: blogsList,
        isLoaded: true
      });
    });
  }

  render() {
    const elemento = this.state.blogs.find(e => e.link === this.props.match.params.blogLink)

    return (
    // Article
    <div className="BlogEntrada">
      <article className="be-article">
        {
          this.state.isLoaded && <div>
              <h1 className="be-article-titulo">{elemento.titulo}</h1>
              <header className="be-article-header">
                <p className="be-article-autor">{elemento.autor}</p>
                <p className="be-article-fecha">{elemento.fecha}</p>
              </header>
              <main className="be-article-main">
                <img className="be-article-img" src={elemento.img} alt="Blog"/>
                <p className="be-article-contenido">
                  {
                    elemento.contenido.split('\n').map(function(item, key) {
                      return (<span key={key}>
                        {item}
                        <br/>
                      </span>)
                    })
                  }
                </p>
              </main>
              <footer className="be-article-footer">
                <p className="be-article-refs">
                  {
                    elemento.refs.split('\n').map(function(item, key) {
                      return (<span className="be-article-ref" key={key}>
                        {item}
                        <br/>
                      </span>)
                    })
                  }
                </p>
              </footer>
            </div>
        }
        < /article>
          <Footer/ ></div>)
}
}

export default BlogEntrada;
