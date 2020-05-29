import React from 'react';
import Board from './components/Game/Game';

import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Board width={30} height={12} mines={5} />
    </div>
  );
}

export default App;
