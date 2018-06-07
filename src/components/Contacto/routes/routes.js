// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Diagnostico from '../components/Diagnostico'
import Page404 from '../components/Page404'
// Container
import SubContacto from '../containers/sub-contacto'

const SubContactoRoutes = (props) =>
  <Switch>
    <Route path={`${props.match.url}/Diagnostico`} component={Diagnostico} />
    <Route exact path={props.match.url} component={SubContacto} />
    <Route component={Page404}/>
  </Switch>
export default SubContactoRoutes;
