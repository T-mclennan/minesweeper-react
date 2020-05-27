import React, { useState } from 'react';
import PropTypes from 'prop-types';

import corona from '../../assets/mines/purple-mine.png';
import foundCorona from '../../assets/mines/red-mine.png';
import flag from '../../assets/flags/red-flag.png';
import './Cell.css';

const Cell = (props) => {
  const { isMine, isFlagged, isVisible, neighborCount } = props.data;

  const [lastCell, setLastCell] = useState(false);

  const finalClick = () => {
    setLastCell(true);
  };
  const generateContent = () => {
    let content = null;
    if (isFlagged) {
      content = (
        <img
          style={{
            marginLeft: '0.2rem',
            width: '1.4rem',
            height: '1.4rem',
          }}
          src={flag}
          alt={'flag'}
        />
      );
    } else if (isMine && isVisible) {
      const mineVersion = lastCell ? foundCorona : corona;
      content = (
        <img
          style={{
            marginLeft: '0.2rem',
            width: '1.6rem',
            height: '1.6rem',
          }}
          src={mineVersion}
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
        return '#001f3f';
      case 2:
        return 'darkcyan';
      case 3:
        return 'deepskyblue';
      case 4:
        return 'mediumaquamarine';
      case 5:
        return 'cornflowerblue';
      case 6:
        return 'orchid';
      case 7:
        return 'violet';
      case 8:
        return 'gold';
      default:
        return '#faf2f2';
    }
  };

  const generateStyle = () => {
    const { isVisible, neighborCount, isFlagged } = props.data;

    if (isFlagged) {
      return { ...coveredStyle, color: 'red', fontSize: '1.8rem' };
    } else if (lastCell) {
      return {
        ...seenCell,
        backgroundColor: 'rgb(252, 214, 210)',

        border: '1px ridge rgb(159, 197, 195)',
      };
    } else if (isVisible && neighborCount > 0) {
      return { ...seenCell, color: generateColor(neighborCount) };
    } else if (isVisible && neighborCount === 0) {
      return emptyCell;
    } else {
      return coveredStyle;
    }
  };

  const dynamicStyling = generateStyle();

  return (
    <div
      style={{ ...cellStyle, ...dynamicStyling }}
      onClick={() => props.leftClick(finalClick)}
      onContextMenu={(e) => props.rightClick(e)}
    >
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
  fontSize: '1.2rem',
  border: '1px dotted lightgray',
};

const emptyCell = {
  backgroundColor: '#faf2f2',
  fontSize: '1.5rem',
  border: '1px dotted rgb(218, 218, 218)',
};

export default Cell;
