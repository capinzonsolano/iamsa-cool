// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Tema from '../components/Tema'
import Equipo from '../components/Equipo'
import Page404 from '../components/Page404'
// Container
import SubNosotros from '../containers/sub-nosotros'

const SubNosotrosRoutes = (props) =>
  <Switch>
    <Route path={`${props.match.url}/Equipo`} component={Equipo} />
    <Route path={`${props.match.url}/:temaId`} component={Tema} />
    <Route exact path={props.match.url} component={SubNosotros} />
    <Route component={Page404}/>
  </Switch>
export default SubNosotrosRoutes;
