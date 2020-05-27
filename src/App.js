import React from 'react';
import { Header } from './components/Header';
import Board from './components/Board/Board';

import './stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Board width={30} height={12} mines={30} />
    </div>
  );
}

export default App;
