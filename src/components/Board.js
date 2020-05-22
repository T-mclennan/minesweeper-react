import React, { Component } from 'react';
import { initBoard } from '../actions/initBoard';
import { renderBoard } from '../actions/renderBoard';
import PropTypes from 'prop-types';

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
          <span className='info'>mines: {this.state.mines}</span>
          <br />
          <span className='info'>{this.state.gameEnded}</span>
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
