import React from 'react';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			secondsElapsed: 0
		}
	}

	render() {
		return(
			<div>
				Seconds elapsed: {this.state.secondsElapsed}
			</div>
		);
	}

	tick() {
		this.setState((previousState) => ({
			secondsElapsed: previousState.secondsElapsed + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInverval(this.interval);
	}

}

export default Timer;
