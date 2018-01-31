import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import App from './App';
import logo from './logo.svg';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
