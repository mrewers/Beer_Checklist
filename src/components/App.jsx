import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminPage from 'pages/AdminPage/AdminPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';

import * as ROUTES from 'constants/routes';

import './App.css';

const App = () => (
  <div className='app-routes'>
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
