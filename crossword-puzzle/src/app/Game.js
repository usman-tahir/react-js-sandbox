import React from 'react';

class Game extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-8">
          <h3>Crossword</h3>
          <Puzzle/>
        </div>
        <div className="col-md-4">
          <h2>Clues</h2>
          <Clues data={this.props.data}/>
        </div>
      </div>
    );
  }
}
