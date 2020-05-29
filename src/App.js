import React from 'react';
import Board from './components/Game/Game';

import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Board width={13} height={15} mines={40} />
      {/* <Route exact path="/">
          <Landing />
      </Route>
      <Route exact path="/Play">
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
