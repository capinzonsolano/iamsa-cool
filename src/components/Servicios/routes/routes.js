// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Tema from '../components/Tema'
import Page404 from '../components/Page404'
// Container
import SubServicios from '../containers/sub-servicios'

const SubServiciosRoutes = (props) =>
  <Switch>
    <Route path={`${props.match.url}/:temaId`} component={Tema} />
    <Route exact path={props.match.url} component={SubServicios} />
    <Route component={Page404}/>
  </Switch>
export default SubServiciosRoutes;
