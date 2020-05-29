export const checkWin = (board) => {
  let win = true;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (
        (!cell.isVisible && !cell.isFlagged) ||
        (!cell.isFlagged && cell.isMine)
      ) {
        win = false;
      }
    });
  });
  return win;
};
