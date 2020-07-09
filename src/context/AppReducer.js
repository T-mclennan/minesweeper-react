export default (state, action) => {
  switch (action.type) {
    case 'SET_GAME_PARAMS':
      const { height, width, mines } = action.payload;
      return {
        ...state,
        gameParams: {
          height,
          width,
          mines,
          ...state.gameParams,
        },
      };

    case 'TOGGLE_SOUND':
      const { isSfx } = state.gameParams;
      return {
        ...state,
        gameParams: {
          isSfx: !isSfx,
          ...state.gameParams,
        },
      };

    case 'TOGGLE_THEME':
      const { theme } = state.gameParams;
      return {
        ...state,
        gameParams: {
          theme: theme === 'orange' ? 'blue' : 'orange',
          ...state.gameParams,
        },
      };

    case 'TOGGLE_ANIMATE':
      const { animate } = state.gameParams;
      return {
        ...state,
        gameParams: {
          animate: !animate,
          ...state.gameParams,
        },
      };

    default:
      return state;
  }
};
