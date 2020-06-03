import React from 'react';
import Board from './components/Game/Game';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Landing from './pages/Landing';
import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      {/* <Board width={30} height={18} mines={15} /> */}
      <Router>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Router>
      {/* <Route exact path="/Play">
          <Board />
      </Route>
      <Route exact path="/Scores">
          <Scoreboard />
      </Route>


      <Route path='/*' component={FourOFour} /> */}
    </div>
  );
}

export default App;
