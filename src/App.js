import React from 'react';
import Landing from './Landing/Landing.jsx';
import Pick from './Pick/Pick.jsx';
import Dashboard from './DashBoard/Dashboard.jsx';
import Listings from './Listings/Listings.jsx';
import Messages from './Messages/Messages.jsx';
import Candidates from './Candidates/Candidates.jsx';
import Profile from './Profile/Profile.jsx';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/Choose">
        <Pick />
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/Listings">
        <Listings />
      </Route>
      <Route exact path="/Messages">
        <Messages />
      </Route>
      <Route exact path="/Candidates">
        <Candidates />
      </Route>
      <Route exact path="/Profile">
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
