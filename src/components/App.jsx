import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AdminPage = lazy(() =>
  import(/* webpackChunkName: "admin" */ 'pages/AdminPage/AdminPage')
);
const ConsumedPage = lazy(() =>
  import(/* webpackChunkName: "consumed" */ 'pages/ConsumedPage/ConsumedPage')
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "login" */ 'pages/LoginPage/LoginPage')
);
const MainPage = lazy(() =>
  import(/* webpackChunkName: "mainpage" */ 'pages/MainPage/MainPage')
);

import * as ROUTES from 'constants/routes';

import './App.scss';

const App = () => (
  <div className='app-routes'>
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.CONSUMED} component={ConsumedPage} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
