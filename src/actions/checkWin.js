export const checkWin = (board) => {
  let win = true;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (
        (!cell.isVisible && !cell.isFlagged) ||
        (!cell.isFlagged && cell.isMine)
      ) {
        console.log(
          `x:${cell.x} y:${cell.y} ${cell.isVisible} ${cell.isFlagged} `
        );
        win = false;
      }
    });
  });

  console.log(win);
  return win;
};
