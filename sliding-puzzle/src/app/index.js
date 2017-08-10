import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './js/Tile';
import Board from './js/Board';
import Puzzle from './js/Puzzle';

var APP = document.getElementById('app');

class App extends React.Component {

	render() {
		return(
			<Puzzle/>
		);
	}

}

ReactDOM.render(<App/>, APP);
