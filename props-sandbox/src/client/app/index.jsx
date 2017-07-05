
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>hello {this.props.name || 'world'}</p>
			</div>
		);
	}
}

render(<App name="John Doe"/>, document.getElementById('app'));
