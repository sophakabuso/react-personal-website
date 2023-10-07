/// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} /> {/* Define your routes */}
        {/* Add more routes for other components */}
      </Switch>
    </Router>
  );
}

export default Routes;
