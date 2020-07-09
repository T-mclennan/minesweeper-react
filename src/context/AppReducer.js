import { sceneActions } from 'aws-amplify';

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

    default:
      return state;
  }
};
