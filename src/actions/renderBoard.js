import React from 'react';

import Cell from '../components/Cell/Cell';

export const renderBoard = (data, leftClickHandler, rightClickHandler) => {
  return (
    <div style={boardStyle}>
      <div style={colStyle}>
        {data.map((row, i) => {
          return (
            <div key={i} style={rowStyle}>
              {row.map((item) => {
                return (
                  <Cell
                    key={item.x * row.length + item.y}
                    data={item}
                    leftClick={() => leftClickHandler(item.x, item.y)}
                    rightClick={(e) => rightClickHandler(e, item.x, item.y)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexGrow: '1',
};

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
};

const boardStyle = {
  display: 'inline-block',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#faf2f2',
  maxWidth: '100rem',
  dropShadow: '',
};
