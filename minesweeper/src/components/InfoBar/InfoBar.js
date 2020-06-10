import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';
import Button from '@material-ui/core/Button';
import refreshGame from '../Game/Game';
import './InfoBar.css';
import history from '../../history';

const infoBar = (props) => {
  return (
    <div style={barStyle}>
      <h5 className='game-status'>{props.status}</h5>
      <Button
        variant='outlined'
        style={props.playing ? invisibleButton : HomeButton}
        onClick={() => {
          history.push('/');
        }}
      >
        Main Menu
      </Button>
      <Button
        variant='outlined'
        style={props.playing ? invisibleButton : ReplayButton}
        onClick={() => {
          history.go();
        }}
      >
        Play Again?
      </Button>
      <Clock playing={props.playing} updateTime={props.updateTime} />
    </div>
  );
};

const barStyle = {
  padding: '0.3rem',
  display: 'flex',
  backgroundColor: '#0e2754',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
};

const invisibleButton = {
  display: 'none',
};

const ButtonStyle = {
  color: 'white',
  fontSize: '1rem',
  height: '3.2rem',
  width: '10rem',
  fontWeight: 'bold',
  borderColor: 'white',
  borderRadius: '1rem',
  marginTop: '0.5rem',
};

const HomeButton = {
  ...ButtonStyle,
  backgroundColor: 'red',
};

const ReplayButton = {
  ...ButtonStyle,
  backgroundColor: 'deepskyblue',
};

infoBar.propTypes = {};

export default infoBar;
