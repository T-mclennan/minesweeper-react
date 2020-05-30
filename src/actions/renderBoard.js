import React from 'react';
import Cell from '../components/Cell/Cell';

export const renderBoard = (data, leftClickHandler, rightClickHandler) => {
  return (
    <div style={{ ...boardStyle, ...noRightClick }}>
      <div style={colStyle}>
        {data.map((row, i) => {
          return (
            <div key={i} style={rowStyle}>
              {row.map((item) => {
                return (
                  <Cell
                    key={item.x * row.length + item.y}
                    data={item}
                    leftClick={(finalClick) =>
                      leftClickHandler(item.x, item.y, finalClick)
                    }
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
  borderWidth: '2px',
  borderColor: 'lightgray',
  borderStyle: 'double',
  transition: '0.7s all ease-in',
  // border: '1px solid black',
  // boxShadow: 'inset 2px 0px 3px 1px red',
  // boxShadow: 'inset 0px 2px 3px 1px white',
};

const noRightClick = {
  webkitUserSelect: 'none',
  mozUserSelect: 'none',
  msUserSelect: 'none',
  oUserSelect: 'none',
  userSelect: 'none',
};
