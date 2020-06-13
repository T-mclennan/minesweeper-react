import React, { Component } from 'react';
import {
  initBoard,
  revealCells,
  showBoard,
  extraBoardClear,
} from '../../actions/initBoard';
import { renderBoard } from '../../actions/renderBoard';
import { checkWin, generateScore } from '../../actions/checkWin';
import { GameProvider } from './GameContext';
import InfoBar from '../InfoBar/InfoBar';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    const { height, width, mines } = this.props.match.params;
    this.state = {
      width: width,
      height: height,
      board: initBoard(height, width, mines),
      mines: mines,
      gameStatus: '',
      playing: true,
      finalCell: {},
      score: 0,
    };
  }

  componentDidMount() {
    const { gameStatus, mines } = this.state;
    if (!gameStatus) {
      this.setState({ gameStatus: `Mines remaining: ${mines}` });
    }
  }

  checkForWin = (board) => {
    if (checkWin(board)) {
      this.setState({
        gameStatus: `You win!`,
        playing: false,
      });
    }
  };

  resetGame = () => {
    const { height, width, mines } = this.state;
    this.setState({
      board: initBoard(height, width, mines),
      gameStatus: '',
      playing: true,
      finalCell: {},
      score: 0,
    });
  };

  leftClickHandler = (x, y, finalClick) => {
    if (this.state.playing) {
      const { isVisible, isFlagged, isMine } = this.state.board[y][x];
      let updatedBoard = this.state.board;

      if (isVisible || isFlagged) return null;

      if (isMine) {
        finalClick();
        this.setState({
          gameStatus: 'Game over, you lost!',
          playing: false,
          board: showBoard(this.state.board),
          finalCell: {
            x,
            y,
          },
        });
      }

      if (!isVisible) {
        updatedBoard = revealCells(updatedBoard, x, y);
        this.setState({ board: updatedBoard });
      }

      this.checkForWin(updatedBoard);
    }
  };

  rightClickHandler = (event, x, y) => {
    event.preventDefault();
    let updatedBoard = this.state.board;
    const { isFlagged, isVisible } = this.state.board[y][x];
    let { mines, playing } = this.state;
    if (!isVisible && playing) {
      //Only place flags if there are more to place:
      if (!updatedBoard[y][x].isFlagged) {
        if (mines > 0) {
          updatedBoard[y][x].isFlagged = !isFlagged;
          mines--;
        }

        //Always remove flags:
      } else {
        updatedBoard[y][x].isFlagged = !isFlagged;
        mines++;
      }

      this.setState({
        board: updatedBoard,
        mines: mines,
        gameStatus: `Mines remaining: ${mines}`,
      });
    }

    this.checkForWin(updatedBoard);
  };

  doubleClickHandler = (event, x, y) => {
    event.preventDefault();
    let { board } = this.state;

    if (board[y][x].isVisible && !board[y][x].isFlagged) {
      board = extraBoardClear(board, x, y);
    }

    this.setState({ board: board });
    this.checkForWin(board);
  };

  updateTimeUsed = (elapsed) => {
    this.setState({ score: elapsed });
    this.endGame(elapsed);
  };

  endGame = (elapsed) => {
    if (this.state.gameStatus === 'You win!') {
      const { width, height } = this.state;
      const { mines } = this.props.match.params;
      const score = generateScore(elapsed, width, height, mines);
      this.setState({
        score: score,
        gameStatus: `You win! Score is: ${score}`,
      });
    }
  };

  render() {
    const { board, gameStatus, playing } = this.state;
    const gameState = {
      state: this.state,
      leftClickHandler: this.leftClickHandler,
      rightClickHandler: this.rightClickHandler,
      doubleClickHandler: this.doubleClickHandler,
    };

    return (
      //Add context API here:
      <div className='game'>
        <InfoBar
          status={gameStatus}
          playing={playing}
          updateTime={this.updateTimeUsed}
          resetGame={this.resetGame}
        />
        <GameProvider value={gameState}>
          <div className='main-content'>
            {renderBoard(
              board,
              this.leftClickHandler,
              this.rightClickHandler,
              this.doubleClickHandler
            )}
          </div>
        </GameProvider>
      </div>
    );
  }
}
