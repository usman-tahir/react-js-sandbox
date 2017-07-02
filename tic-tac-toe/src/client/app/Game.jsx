import React from 'react';
import {render} from 'react-dom';
import Board from './Board.jsx';

class Game extends React.Component {
  render() {
    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div>
            {/* TODO: Status */}
          </div>
          <ol>
            {/* TODO: Moves */}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
