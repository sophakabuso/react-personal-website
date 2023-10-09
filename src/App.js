/// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutMe from './components/AboutMe';
import Contact from './components/AboutMe';
import Education from './components/AboutMe';
import Experience from './components/AboutMe';
import Header from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Navigator from './navigator/Navigator';


function Routes() {
  return (
    <Router>
    
        <Route exact path="/" component={MainPage} /> {/* Define your routes */}
        <Route path = "aboutMe" component={AboutMe} />
        <Route path = "contact" component={Contact} />
        <Route path = "aboutMe" component={Education} />
        <Route path = "aboutMe" component={Experience} />
        <Route path = "aboutMe" component={Header} />
        <Route path = "/portfolio" component={Portfolio} />
        <Route path = "/skills" component={Skills} />
        <Route path = "aboutMe" component={Navigator} />
        <Route path = "aboutMe" component={AboutMe} />
        {/* Add more routes for other components */}
   
    </Router>
  );
}

export default Routes;
