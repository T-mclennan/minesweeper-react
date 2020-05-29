import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';
import './InfoBar.css';

const infoBar = (props) => {
  return (
    <div style={barStyle}>
      <h2 className='game-status'>{props.status}</h2>
      <Clock playing={props.playing} />
    </div>
  );
};

const barStyle = {
  margin: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignContent: 'center',
};
infoBar.propTypes = {};

export default infoBar;
