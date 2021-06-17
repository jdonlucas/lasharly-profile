import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import EzeCafe from './pages/EzeCafe';
import Contacto from './pages/Contacto';
import LaSharly from './pages/LaSharly';
import Uam from './pages/Uam';
import Menu from './pages/Menu';

import Navbar from './elements/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ezecafe" exact component={EzeCafe} />
        <Route path="/aboutme" exact component={LaSharly} />
        <Route path="/index" exact component={Menu} />
        <Route path="/proyectos" exact component={Uam} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
