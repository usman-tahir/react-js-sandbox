import React from 'react';

class Button extends React.Component {

	constructor(props) {
		super();
		this.state = {
			clicks: props.initialClicks
		};
	}

	render() {
		return(
			<div>
				<p>Number of clicks: {this.state.clicks}</p>
				<hr/>
				<button onClick={() => this.clickHandler()}>Click me</button>
			</div>
		);
	}

	clickHandler() {
		this.setState({
			clicks: this.state.clicks + 1
		});
	}

}

export default Button;
