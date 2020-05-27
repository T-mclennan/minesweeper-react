import React, { Component } from 'react';
import { initBoard, revealCells, showBoard } from '../../actions/initBoard';
import { renderBoard } from '../../actions/renderBoard';
import PropTypes from 'prop-types';

import './Board.css';
export default class Board extends Component {
  constructor(props) {
    super(props);

    // Board[x][y] object contains the following data members:
    // int x,
    // int y,
    // int neighborCount
    // bool isMine,
    // bool isFlagged,
    // bool isVisible,

    this.state = {
      board: initBoard(this.props.height, this.props.width, this.props.mines),
      mines: this.props.mines,
      gameStatus: null,
      playing: true,
    };
  }

  componentDidMount() {
    if (!this.state.gameStatus) {
      this.setState({ gameStatus: `Mines remaining: ${this.state.mines}` });
    }
  }

  leftClickHandler = (x, y) => {
    if (this.state.playing) {
      console.log(`Checking: x:${x} y:${y}`);
      const { isVisible, isFlagged, isMine } = this.state.board[y][x];
      let updatedBoard = this.state.board;

      if (isVisible || isFlagged) return null;

      if (isMine) {
        this.setState({
          gameStatus: 'Game over, you lost!',
          playing: false,
          board: showBoard(this.state.board),
        });
      }

      if (!isVisible) {
        updatedBoard = revealCells(updatedBoard, x, y);
        this.setState({ board: updatedBoard });
      }
    }
  };

  rightClickHandler = (x, y) => {};

  render() {
    return (
      <div className='board'>
        <div className='game-info'>
          <span className='info'>{this.state.gameStatus}</span>
        </div>
        {renderBoard(
          this.state.board,
          this.leftClickHandler,
          this.rightClickHandler
        )}
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    mines: PropTypes.number,
  };
}
