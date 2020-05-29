import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';
import Button from '@material-ui/core/Button';
import './InfoBar.css';

const infoBar = (props) => {
  return (
    <div style={barStyle}>
      <h5 className='game-status'>{props.status.padEnd(26)}</h5>
      <Button
        variant='outlined'
        style={props.playing ? invisibleButton : HomeButton}
      >
        Main Menu
      </Button>
      <Button
        variant='outlined'
        style={props.playing ? invisibleButton : ReplayButton}
      >
        Play Again?
      </Button>
      <Clock playing={props.playing} updateTime={props.updateTime} />
    </div>
  );
};

const barStyle = {
  padding: '1rem',
  display: 'flex',
  backgroundColor: 'black',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
};

const invisibleButton = {
  display: 'none',
  // margin: '0.5rem',
};

const ButtonStyle = {
  color: 'white',
  fontSize: '1rem',
  height: '3.2rem',
  width: '12rem',
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
