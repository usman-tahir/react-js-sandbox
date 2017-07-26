import React from 'react';
import ReactDOM from 'react-dom';

var APP = document.getElementById('app');

class App extends React.Component {

	render() {
		return(
			<div>
				<h1>It works!</h1>
			</div>
		);
	}

}

ReactDOM.render(<App/>, APP);
