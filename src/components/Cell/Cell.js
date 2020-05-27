import React from 'react';
import PropTypes from 'prop-types';

import corona from '../../assets/mines/icons8-coronavirus-64.png';
import './Cell.css';

const Cell = (props) => {
  const { isMine, isFlagged, isVisible, neighborCount } = props.data;
  const generateContent = () => {
    let content = null;
    if (isFlagged) {
      content = '^';
    } else if (isMine && isVisible) {
      content = (
        <img
          style={{
            marginLeft: '0.2rem',
            width: '1.6rem',
            height: '1.6rem',
          }}
          src={corona}
          alt={'mine'}
        />
      );
    } else if (neighborCount > 0) {
      content = neighborCount;
    }
    return content;
  };

  const generateColor = (num) => {
    switch (num) {
      case 1:
        return 'salmon';
      case 2:
        return 'gold';
      case 3:
        return 'darkcyan';
      case 4:
        return 'mediumaquamarine';
      case 5:
        return 'cornflowerblue';
      case 6:
        return 'orchid';
      case 7:
        return 'deepskyblue';
      case 8:
        return 'violet';
      default:
        return '#faf2f2';
    }
  };

  const generateStyle = () => {
    const { isVisible, neighborCount } = props.data;

    if (isVisible) {
      return { ...seenCell, color: generateColor(neighborCount) };
    } else {
      return coveredStyle;
    }
  };

  const dynamicStyling = generateStyle();

  return (
    <div
      style={{ ...cellStyle, ...dynamicStyling }}
      onClick={() => props.leftClick()}
    >
      {/* {props.data.neighborCount} */}
      {generateContent()}
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
  backgroundColor: '#a4b5bf',
  color: '#a4b5bf',
  border: '1px ridge rgb(108, 121, 134)',
};

const seenCell = {
  backgroundColor: '#faf2f2',
  color: 'green',
  border: '1px ridge #faf2f2',
};

export default Cell;
