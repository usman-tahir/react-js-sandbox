import React from 'react';

var Menu = React.createClass({
  displayName: 'Menu',
  render: function () {
    return React.DOM.div({id: 'menu'},
      React.DOM.h3({id: 'subtitle'}, this.props.status),
      React.Dom.a({className: this.props.winClass, onClick: this.clickHandler}, Restart)
    );
  },
  clickHandler: function (e) {
    this.props.restart();
  }
});

export Default Menu;
