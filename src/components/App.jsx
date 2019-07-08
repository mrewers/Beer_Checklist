import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminPage from 'pages/AdminPage/AdminPage';
import ConsumedPage from 'pages/ConsumedPage/ConsumedPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';

import * as ROUTES from 'constants/routes';

import './App.scss';

const App = () => (
  <div className='app-routes'>
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.CONSUMED} component={ConsumedPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.MAIN} component={MainPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
