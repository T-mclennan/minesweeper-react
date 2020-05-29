import React, { Component } from 'react';
import { initBoard, revealCells, showBoard } from '../../actions/initBoard';
import { renderBoard } from '../../actions/renderBoard';
import { checkWin, generateScore } from '../../actions/checkWin';
import PropTypes from 'prop-types';

import InfoBar from '../InfoBar/InfoBar';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: initBoard(this.props.height, this.props.width, this.props.mines),
      mines: this.props.mines,
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

  updateTimeUsed = (elapsed) => {
    this.setState({ score: elapsed });
    console.log(elapsed);
    console.log(this.state.score);
    this.endGame(elapsed);
  };

  endGame = (elapsed) => {
    if (this.state.gameStatus === 'You win!') {
      const { width, height, mines } = this.props;
      const score = generateScore(elapsed, width, height, mines);
      this.setState({
        score: score,
        gameStatus: `You win! Score is: ${score}`,
      });
    }
  };

  render() {
    return (
      <div className='game'>
        <InfoBar
          status={this.state.gameStatus}
          playing={this.state.playing}
          updateTime={this.updateTimeUsed}
        />
        <div className='main-content'>
          {renderBoard(
            this.state.board,
            this.leftClickHandler,
            this.rightClickHandler
          )}
        </div>
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    mines: PropTypes.number,
  };
}
