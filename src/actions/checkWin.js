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

export const generateScore = (elapsed, width, height, mines) => {
  console.log(`width: ${width} height: ${height} mines: ${mines}`);
  const mineCoefficient = mines / (width * height);
  const upperBound = 6000 * mines * (1 + (mineCoefficient - 0.1));
  // const mineCoefficient = mines / (width * height);
  const score = ((upperBound - elapsed) * mineCoefficient) / 2;
  console.log(`elapsed time: ${elapsed} upper bound: ${upperBound}`);
  console.log(`mine coefficient: ${mineCoefficient - 0.1} score: ${score}`);

  return Math.floor(score);
};
