import React from 'react';
// import Cell from '../components/Cell';

export const renderBoard = (data) => {
  console.log('inside render function');
  console.log(data);

  return (
    <div style={colStyle}>
      {data.map((datarow) => {
        return (
          <div style={rowStyle}>
            {datarow.map((dataitem) => {
              return (
                <div
                  style={cellStyle}
                  key={dataitem.x * datarow.length + dataitem.y}
                >
                  {dataitem.isMine ? 'x' : dataitem.neighborCount}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const cellStyle = {
  margin: '1rem 1.4rem',
};
