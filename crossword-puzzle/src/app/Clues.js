import React from 'react';

class Clues extends React.Component {
  render() {
    var statements = this.props.data.map(function (clues) {
      return(
        <Output clue={clues.clue}></Output>
      );
    });

    return(
      <div className="clueList">
        {statements}
      </div>
    );
  }
}
