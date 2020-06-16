import React from 'react';
import Game from './components/Game/Game';
import { Router } from 'react-router';
import { Route, Link } from 'react-router-dom';

import history from './history';
import Landing from './pages/Landing';
import Scoreboard from './pages/Scoreboard';
import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route
          exact
          path='/play/:width/:height/:mines'
          render={(props) => <Game {...props} />}
        />
        <Route exact path='/scores'>
          <Scoreboard />
        </Route>
      </Router>

      {/* <Route path='/*' component={FourOFour} /> */}
    </div>
  );
}

export default App;
