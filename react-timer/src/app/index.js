import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

var APP = document.getElementById('app');

class App extends React.Component {

	render() {
		return(
			<Timer/>
		);
	}

}

ReactDOM.render(<App/>, APP);
