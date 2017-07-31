import React from 'react';

class Tile extends React.Component {
  render() {
    const tileClass = (this.props.value === 0) ? ('square zero') : ('square');
    return(
      <span className={tileClass} onClick={() => this.props.clickHandler()}>
        {this.props.value}
      </span>
    );
  }
};

export default Tile;
