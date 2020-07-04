import React, { createContext, userReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  gameState: {},
};

//Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = userReducer(AppReducer, InitialState);

  return (
    <GlobalContext.Provider value={{ gameState: state.gameState }}>
      {children}
    </GlobalContext.Provider>
  );
};
