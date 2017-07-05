
import React from 'react';
import {render} from 'react-dom';
import Timer from './Timer.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Timer/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
