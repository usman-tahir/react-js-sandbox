import React from 'react';

class Board extends React.Component {
  componentWillMount() {
    this.findClickable(this.props.board, this.props.size);
  }

  componentWillReceiveProps(nextProps) {
    this.findClickable(nextProps.board, nextProps.size);
  }

  shouldComponentUpdate(nextProps) {
    const current = this.props.board.join('');
    const next = nextProps.board.join('');

    return current !== next;
  }

  render() {
    const squares = this.props.board.map((value, index) => {
      if ((index + 1) % this.props.size === 0) {
        return(
          <span>
            {<Cell value={value} clickHandler={this.cellClickHandler.bind(this, index)}/>}
            <br>
          </spam>
        );
      }
      return <Cell value={value} clickHandler={this.cellClickHandler.bind(this, index)}/>;
    });
    return(
      <div className='board'>
        {squares}
      </div>
    );
  }

  findClickable(board, size) {
    const zeroIndex = board.indexOf(0);
    const zeroCoordinate = this.getCoordinateFromIndex(zeroIndex, size);
    const possibleTopIndex = zeroCoordinate.row > 0 ? this.getIndexFromCoordinate(zeroCoordinate.row - 1, zeroCoordinate.column, size) : null;
    const possiblRightIndex = zeroCoordinate.column < size ? this.getIndexFromCoordinate(zeroCoordinate.row, zeroCoordinate.column + 1, size) : null;
    const possiblBottomIndex = zeroCoordinate.row < size ? this.getIndexFromCoordinate(zeroCoordinate.row + 1, zeroCoordinate.column, size) : null;
    const possibleLeftIndex = zeroCoordinate.column > 0 ? this.getIndexFromCoordinate(zeroCoordinate.row, zeroCoordinate.column - 1, size) : null;

    this.setState({
      zero: zeroIndex,
      possibleTopIndex: possibleTopIndex,
      possibleRightIndex: possibleRightIndex,
      possibleBottomIndex: possibleBottomIndex,
      possibleLeftIndex: possibleLeftIndex
    });
  }

  getCoordinateFromIndex(index, size) {
    return {
      row: Math.floor(index / size) + 1,
      column: (index % size) + 1
    };
  }

  getIndexFromCoordinate(row, column, size) {
    return(size * (row - 1)) + column - 1;
  }

  cellClickHandler(index) {
    const isPossibleTopIndex = (index === this.state.possibleTopIndex);
    const isPossibleBottomIndex = (index === this.state.possibleBottomIndex);
    const isPossibleRightIndex = (index === this.state.possibleRightIndex);
    const isPossibleLeftIndex = (index === this.state.possibleLeftIndex);

    if (isPossibleTopIndex || isPossibleBottomIndex || isPossibleRightIndex || isPossibleLeftIndex) {
      this.nextBoard(index);
    }
  }

  nextBoard(index, direction) {
    const board = this.props.board.slice();
    const temp = board[index];

    board[index] = board[this.state.zero];
    board[this.state.zero] = temp;
    this.props.updateBoard(board);
  }
}
