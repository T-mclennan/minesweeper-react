import React, { useState } from 'react';
import { Table } from 'reactstrap';
import '../stylesheets/Scoreboard.css';

const Scoreboard = () => {
  const mockScores = [
    { username: 'Harry', score: 1000 },
    { username: 'Tina', score: 1050 },
    { username: 'Sarah', score: 1111 },
    { username: 'Chris', score: 2010 },
    { username: 'Sash', score: 1111 },
    { username: 'Stephan', score: 2003 },
    { username: 'Sarah', score: 1111 },
    { username: 'Chris', score: 2010 },
    { username: 'Sash', score: 1111 },
    { username: 'Stephan', score: 2003 },
  ];

  const [scores, setScores] = useState(mockScores);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setScores(await fetchScores());
  //   };
  //   fetchAPI();
  // }, [setScores]);

  const renderResultRows = (data) => {
    return data.map((player, index) => {
      console.log(player);
      index++;
      return (
        <tr>
          <th scope='row'>{index}</th>
          <td>{player.username}</td>
          <td>{player.score}</td>
        </tr>
      );
    });
  };

  return (
    <div className='standings-page'>
      <h2 className='header'>Top Players:</h2>
      <div style={outerScoreContainer}>
        <div style={innerScoreContainer}>
          <Table
            className='standings'
            style={tableStyle}
            size='sm'
            responsive
            striped
          >
            <thead>
              <tr>
                <th style={{ width: '3rem' }}>#</th>
                <th style={{ width: '17rem' }}>Username</th>
                <th style={{ width: '17rem' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {mockScores.length > 0 ? (
                renderResultRows(scores)
              ) : (
                <tr>
                  <th>no scores yet!</th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const outerScoreContainer = {
  height: '85%',
  border: '1px double #ffd79c',
  padding: '2rem',
  borderRadius: '2rem',
  margin: 'auto',
  marginTop: '1rem',
};

const innerScoreContainer = {
  borderRadius: '2rem',
  border: '2rem solid rgba(245,245,245, 0.8)',
  borderTop: '0px',
};

const tableStyle = {
  height: '85%',
  borderRadius: '2rem',
  padding: '2rem',
  border: '1px red',
  color: '#0e1a49',
  margin: '0px',
};

export default Scoreboard;
