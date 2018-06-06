//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';
render(
  <HashRouter>
    <AppRoutes/>
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
