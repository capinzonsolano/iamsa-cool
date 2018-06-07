// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import App from './components/App.js';
import Servicios from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';
import Blog from './components/Blog/Blog';
import Contacto from './components/Contacto/Contacto';
import Page404 from './components/Page404/Page404';

// Container
import Home from './containers/Home';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path={process.env.PUBLIC_URL + "/Servicios"} component={Servicios}/>
      <Route path={process.env.PUBLIC_URL + "/Nosotros"} component={Nosotros}/>
      <Route path={process.env.PUBLIC_URL + "/Contacto"} component={Contacto}/>
      <Route path={process.env.PUBLIC_URL + "/Blog"} component={Blog}/>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
      <Route component={Page404}/>
    </Switch>
  </App>;
export default AppRoutes;
