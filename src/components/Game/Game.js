import React, { Component } from 'react';
import { initBoard, revealCells, showBoard } from '../../actions/initBoard';
import Board from '../Board/Board';
import { checkWin, generateScore } from '../../actions/checkWin';
import { HighScoreModal } from '../Score/HighScoreModal';
import { GameProvider } from './GameContext';
import { getScores } from '../../actions/scoring';

import InfoBar from '../InfoBar/InfoBar';
import UIfx from 'uifx';
import boom from '../../assets/audio/explosion.mp3';
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
      gameStatus: `Mines remaining: ${mines}`,
      playing: true,
      firstClick: true,
      finalCell: {},
      score: 0,
      sfx: new UIfx(boom, {
        volume: 0.4,
      }),
      showModal: true,
    };
  }

  // componentDidMount() {
  //   const { gameStatus, mines } = this.state;
  //   if (!gameStatus) {
  //     this.setState({ gameStatus: `Mines remaining: ${mines}` });
  //     this.checkHighScore(2000);
  //   }
  // }

  checkForWin = (board) => {
    if (checkWin(board)) {
      this.setState({
        gameStatus: `You win!`,
        playing: false,
      });
    }
  };

  resetGame = () => {
    const { height, width, mines } = this.props.match.params;
    this.setState({
      board: initBoard(height, width, mines),
      gameStatus: `Mines remaining: ${mines}`,
      playing: true,
      finalCell: {},
      score: 0,
    });
  };

  leftClickHandler = (x, y) => {
    const { playing, board, firstClick, sfx } = this.state;
    if (playing) {
      const { isVisible, isFlagged, isMine } = this.state.board[y][x];
      let updatedBoard = board;

      if (isVisible || isFlagged) return null;

      if (isMine) {
        sfx.play();
        this.setState({
          gameStatus: 'Game over, you lost!',
          playing: false,
          board: showBoard(board),
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

      if (firstClick) {
        this.setState({ firstClick: false });
      }
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
    const { height, width } = this.props.match.params;

    // Chosen behavior was to have double click with wrong flags leading to a game loss.
    // The easiest way to execute this was to perform a click on each surrounding square.

    if (board[y][x].isVisible && !board[y][x].isFlagged) {
      if (y > 0) {
        this.leftClickHandler(x, y - 1);

        // top left:
        if (x > 0) {
          this.leftClickHandler(x - 1, y - 1);
        }

        //top right:
        if (x + 1 < width) {
          this.leftClickHandler(x + 1, y - 1);
        }
      }

      //bottom:
      if (y + 1 < height) {
        this.leftClickHandler(x, y + 1);

        // bottom left:
        if (x > 0) {
          this.leftClickHandler(x - 1, y + 1);
        }

        //bottom right:
        if (x + 1 < width) {
          this.leftClickHandler(x + 1, y + 1);
        }
      }

      // left:
      if (x > 0) {
        this.leftClickHandler(x - 1, y);
      }

      //right:
      if (x + 1 < width) {
        this.leftClickHandler(x + 1, y);
      }
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

      if (this.checkHighScore(score)) {
        this.setState({ showModal: true });
      }
    }
  };

  //checkHighScore: Fetches high score data, returns True if current score is in top 10:
  //Input: Int
  //Output: Boolean
  checkHighScore = async (score) => {
    const mockScores = [
      { username: 'Harry', score: 1000 },
      { username: 'Tina', score: 1050 },
      { username: 'Sarah', score: 1111 },
      { username: 'Chris', score: 2010 },
      { username: 'Sash', score: 1111 },
      { username: 'Stephan', score: 2003 },
      { username: 'Sarah', score: 1111 },
      { username: 'Chris', score: 2010 },
      { username: 'Sash', score: 1111 },
      { username: 'Stephan', score: 2003 },
    ];

    // console.log(mockScores);

    const totalScores = mockScores.sort(function (a, b) {
      return b.score - a.score;
    });

    const lowestHighScore =
      totalScores.length < 10 ? totalScores.pop() : totalScores[9];

    // console.log(`lowestHighScore: ${lowestHighScore.score}`);
    // console.log(lowestHighScore.score < score);
    // try {
    //   const allScores = await getScores();
    //   console.log('inside check Score');
    //   console.log(mockScores);
    // } catch (e) {
    //   console.log(e);
    // }
    return lowestHighScore.score < score;
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { board, gameStatus, playing, finalCell } = this.state;
    const gameState = {
      gameStatus: gameStatus,
      finalCell: finalCell,
      playing: playing,
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
            {/* {renderBoard(board)} */}
            <HighScoreModal
              toggle={this.toggleModal}
              modal={this.state.showModal}
            />
            <Board board={board} over={gameStatus === 'Game over, you lost!'} />
          </div>
        </GameProvider>
      </div>
    );
  }
}
