
import React from 'react';
import {render} from 'react-dom';
import GoodbyeComponent from './GoodbyeComponent.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>hello world</p>
				<GoodbyeComponent/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));