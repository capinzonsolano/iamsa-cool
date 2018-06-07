// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import BlogEntrada from '../components/BlogEntrada'
// Container
import Blogs from '../containers/Blogs'

const BlogRoutes = (props) =>
  <Switch>
    <Route path={`${props.match.url}/:blogLink`} component={BlogEntrada} />
    <Route exact path={props.match.url} component={Blogs} />
  </Switch>
export default BlogRoutes;
