// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from '../components/Education';

function Routes() {
  return (
    <Router>
     
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education}/>
        <Route path="/header" component={Header}/>
        {/* Define other routes for additional pages */}
      </Switch>
    </Router>
  );
}

export default Routes;
