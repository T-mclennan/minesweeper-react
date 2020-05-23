import React from 'react';

// import Cell from '../components/Cell';

export const renderBoard = (data) => {
  return (
    <div style={boardStyle}>
      <div style={colStyle}>
        {data.map((row) => {
          return (
            <div style={rowStyle}>
              {row.map((item) => {
                return (
                  <div style={cellStyle} key={item.x * row.length + item.y}>
                    {item.isMine ? 'x' : item.neighborCount}
                  </div>
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

const cellStyle = {
  width: '2rem',
  height: '2rem',
  margin: '1px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: 'lightgray',
};

const boardStyle = {
  display: 'inline-block',
  // margin: '2rem',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#faf2f2',
  // f1d1d1
  maxWidth: '100rem',
  dropShadow: '',
};
