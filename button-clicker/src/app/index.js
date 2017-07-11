import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'

var APP = document.getElementById('app');

class App extends React.Component {

	render() {
		return(
			<Button initialClicks={0}/>
		);
	}

}

ReactDOM.render(<App/>, APP);
