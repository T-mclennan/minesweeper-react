import React from 'react';
import Game from './components/Game/Game';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './pages/Landing';
import Scoreboard from './pages/Scoreboard';
import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/Play/:width/:height/:mines'>
          <Game />
        </Route>
        <Route exact path='/Scores'>
          <Scoreboard />
        </Route>
      </Router>

      {/* <Route path='/*' component={FourOFour} /> */}
    </div>
  );
}

export default App;
