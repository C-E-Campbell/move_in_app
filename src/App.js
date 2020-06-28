import React from 'react';
import './App.css';
import Landing from './Landing/Landing.jsx';
import Pick from './Pick/Pick.jsx';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/choose">
          <Pick />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
