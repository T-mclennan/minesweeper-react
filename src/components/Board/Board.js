import React, { Component } from 'react';
import { initBoard } from '../../actions/initBoard';
import { renderBoard } from '../../actions/renderBoard';
import PropTypes from 'prop-types';

import './Board.css';
export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: initBoard(this.props.height, this.props.width, this.props.mines),
      mines: this.props.mines,
      gameEnded: false,
    };
  }

  render() {
    return (
      <div className='board'>
        <div className='game-info'>
          <span className='info'>Mines Left: {this.state.mines}</span>
        </div>
        {renderBoard(this.state.board)}
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    mines: PropTypes.number,
  };
}
