import React, { Component } from 'react';
import AutosizeInput from './AutosizeInput';
import { withStyles } from 'material-ui/styles';

const styles = {
	container: {
		'& input': {
			fontSize: 30,
			fontFamily: 'Roboto , sans-serif',
			border: 'none',
			outline: 'none',
		},
	},
};

class TestInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || '',
		};
	}

	changeHandler = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<div className={this.props.classes.container}>
				<AutosizeInput
					value={this.state.value}
					onChange={this.changeHandler}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(TestInput);
