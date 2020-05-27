export const checkWin = (board) => {
  let over = true;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isFlagged || !cell.isVisible) {
        over = false;
      }
    });
  });
  return over;
};
