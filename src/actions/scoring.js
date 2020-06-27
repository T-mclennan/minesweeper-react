import { API } from 'aws-amplify';

export const getScores = () => {
  return API.get('scores', '/scores');
};

export const addScore = (username, score) => {
  return API.post('scores', '/scores', {
    username: username,
    score: score,
  });
};

export const checkIfHighscore = (scores, currentScore) => {};
