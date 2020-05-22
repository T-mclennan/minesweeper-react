import React from 'react';
import { Header } from './components/Header';
import Board from './components/Board';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Board width={8} height={8} mines={10} />
    </div>
  );
}

export default App;
