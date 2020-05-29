import React, { Component } from 'react';
import { initBoard, revealCells, showBoard } from '../../actions/initBoard';
import { renderBoard } from '../../actions/renderBoard';
import { checkWin } from '../../actions/checkWin';
import PropTypes from 'prop-types';

import './Game.css';
import InfoBar from '../InfoBar/InfoBar';
export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: initBoard(this.props.height, this.props.width, this.props.mines),
      mines: this.props.mines,
      gameStatus: null,
      playing: true,
      finalCell: {},
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
        gameStatus: 'You win! Congratulations!',
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
    let { mines } = this.state;
    if (!isVisible) {
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

  render() {
    return (
      <div className='game'>
        <InfoBar status={this.state.gameStatus} playing={this.state.playing} />
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
