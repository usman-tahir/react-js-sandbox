import React from 'react';
import ReactDOM from 'react-dom';
import {emitter} from 'emitter';
import {dispatcher} from 'dispatcher';

var APP = document.getElementById('app'),
		Todo;

Todo = React.createClass({
	getInitialState: function () {
		return {
			todos: []
		}
	},

	componentWillMount: function () {
		emitter.on(constants.changed, function (todos) {
			this.setState({
				todos: todos
			})
		}.bind(this));
	},

	componentDidMount: function () {
		dispatcher.dispatch({
			type: constants.all
		});
	},

	componentsWillUnmount: function () {
		emitter.off(constants.all);
	},

	create: function () {
		this.refs.create.show();
	}

});

ReactDOM.render(<App/>, APP);
