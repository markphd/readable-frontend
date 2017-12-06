import React, { Component } from 'react';

class ScoreButton extends Component {

	state = {
		count: this.props.score,
		isClicked: false
	}

	handleScoreUp = () => {
		if (!this.state.isClicked) {
			this.setState( (prevState) => ({ count: prevState.count + 1, isClicked: true }) )
		}
	}

	handleScoreDown = () => {
		if (!this.state.isClicked) {
			this.setState( (prevState) => ({ count: prevState.count !== 0 ? prevState.count - 1 : 0, isClicked: true }) )
		}
	}

	render(){
		return (
			<div>
				<span className="post--score" > Current score is {this.state.count} </span>
				{ this.props.action === "up" &&
					<button onClick={this.handleScoreUp} className="post--score-up"> {this.props.text} </button>
				}
				{ this.props.action === "down" && 
					<button onClick={this.handleScoreDown} className="post--score-down"> {this.props.text} </button>
				}
			</div>
		)
	}
}

export default ScoreButton;