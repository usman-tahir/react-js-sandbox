import React from 'react';

class Output extends React.Component {
  render() {
    return(
      <div className="clues">
        <p>
          {this.props.clue}
        </p>
      </div>
    );
  }
}
