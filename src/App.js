import React from 'react';
import Landing from './Landing/Landing.jsx';
import Pick from './Pick/Pick.jsx';
import Dashboard from './DashBoard/Dashboard.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/choose">
        <Pick />
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
