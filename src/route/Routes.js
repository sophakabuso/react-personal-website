// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        {/* Define other routes for additional pages */}
      </Switch>
    </Router>
  );
}

export default Routes;
