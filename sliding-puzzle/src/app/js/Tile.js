import React from 'react';

var Tile = React.createClass({
  displayName: 'Tile',
  render: function () {
    return React.DOM.div({
      className: 'tile',
      onClick: this.clickHandler
    }, this.props.status);
  },
  clickHandler: function (e) {
    this.props.tileClick(e.target, this.props.key, this.props.status);
  }
});

export default Tile;
