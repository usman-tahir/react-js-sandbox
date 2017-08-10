import React from 'react';
import Board from './Board';

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      size: 3
    };
  }

  render() {
    return(
      <div className='puzzle'>
        <h1>React Sliding Puzzle</h1>
        <p>Click on the squares to move them</p>
        {
          this.state && this.state.board ? <Board size={this.state.size} board={this.state.board} updateBoard={this.updateBoard.bind(this)}/> : null
        }
        <input type='submit' value='New 3x3 game' onClick={this.newGame.bind(this, 3)}/>
        <input type='submit' value='New 4x4 game' onClick={this.newGame.bind(this, 4)}/>
        <input type='submit' value='New 5x5 game' onClick={this.newGame.bind(this, 5)}/>
      </div>
    );
  }

  newGame(size) {
    let dimensions = size * size;
    let board = new Array(dimensions);

    for (let i = 0; i < (dimensions); ++i) {
      board[i] = i;
    }
    board = this.shuffle(board);
    this.updateBoard(board, size);
    this.setState({
      size: size
    });
  }

  updateBoard(board, size) {
    this.setState({
      board: board
    });
  }

  shuffle(array) {
    const temp = array.slice();
    for (var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);

    return temp;
  }
}

export default Puzzle;
