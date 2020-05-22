const generateBoard = (height, width) => {
  let board = [];
  for (let j = 0; j < height; j++) {
    board.push([]);
    for (let i = 0; i < width; i++) {
      board[j][i] = {
        x: i,
        y: j,
        isMine: false,
        isFlagged: false,
        isVisible: false,
        neighborCount: 0,
      };
    }
  }
  return board;
};

const generateMines = (board, height, width, totalMines) => {
  let x,
    y,
    mineCount = 0;
  while (mineCount < totalMines) {
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    if (!board[y][x].isMine) {
      board[y][x].isMine = true;
      mineCount++;
    }
  }
  return board;
};

const checkNeighbors = (board, height, width) => {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      //if cell is mine, tally all surrounding neighbors:
      if (board[y][x].isMine) {
        // top:
        if (y > 0) {
          board[y - 1][x].neighborCount++;

          // top left:
          if (x > 0) {
            board[y - 1][x - 1].neighborCount++;
          }

          //top right:
          if (x + 1 < width) {
            board[y - 1][x + 1].neighborCount++;
          }
        }

        //bottom:
        if (y + 1 < height) {
          board[y + 1][x].neighborCount++;

          // bottom left:
          if (x > 0) {
            board[y + 1][x - 1].neighborCount++;
          }

          //bottom right:
          if (x + 1 < width) {
            board[y + 1][x + 1].neighborCount++;
          }
        }

        // left:
        if (x > 0) {
          board[y][x - 1].neighborCount++;
        }

        //right:
        if (x + 1 < width) {
          board[y][x + 1].neighborCount++;
        }
      }
    }
  }
  return board;
};

export const initBoard = (height, width, mineCount) => {
  let board = generateBoard(height, width);
  board = generateMines(board, height, width, mineCount);
  board = checkNeighbors(board, height, width);

  return board;
};
