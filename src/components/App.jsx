import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './Pages/LoginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';

import './App.css';

const App = () => (
  <div className='app-routes'>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={MainPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
