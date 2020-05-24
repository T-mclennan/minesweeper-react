import React from 'react';
import PropTypes from 'prop-types';

import './Cell.css';

const Cell = (props) => {
  return (
    <div style={{ ...coveredStyle, ...cellStyle }}>
      {props.data.neighborCount}
    </div>
  );
};

Cell.propTypes = {};

const cellStyle = {
  width: '2rem',
  height: '2rem',
  margin: '1px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
};

const coveredStyle = {
  backgroundColor: 'lightgray',
  color: 'lightgray',
  border: '1px solid lightslategrey',
};

export default Cell;
