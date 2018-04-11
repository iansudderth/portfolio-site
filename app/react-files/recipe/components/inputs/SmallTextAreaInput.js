import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
	area: {
		resize: 'none',
		fontFamily: 'Roboto',
		display: 'flex',
		alignItems: 'baseline',
		fontSize: 20,
		border: 'none',
		padding: 0,
		textAlign: 'center',
		background: 'none',
		overflow: 'hidden',
		'&:focus': {
			outline: 'none',
		},
	},
	container: {
		flexGrow: 1,
		display: 'inline-flex',
	},
};

class SmallTextAreaInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value,
		};
	}

	changeHandler = event => {
		let value = event.target.value;
		value = value.replace(/[\t\n\r]/g, '');
		this.setState({ value });
	};

	inputStyles = () => {
		const fontSize = { fontSize: this.props.fontSize };
		const fontWeight = { fontWeight: this.props.fontWeight };
		const leftPadding = { paddingLeft: this.props.leftPadding };
		const minWidth = { minWidth: `${this.state.value || 1}ch` };

		return Object.assign({}, fontSize, fontWeight, leftPadding);
	};

	updateValue = () => {
		let value = this.state.value;
		value = value.trim();
		this.props.updateValue(value);
		this.setState({ value });
	};

	textareaRef = el => {
		this.textarea = el;
	};

	keyPressHandler = event => {
		if (event.which === 13) {
			this.textarea.blur();
		}
	};

	render() {
		const { area, container } = this.props.classes;
		return (
			<div className={container}>
				<textarea
					onChange={this.changeHandler}
					className={area}
					style={this.inputStyles()}
					onBlur={this.updateValue}
					value={this.state.value}
					ref={this.textareaRef}
					onKeyPress={this.keyPressHandler}
					maxLength={this.props.charLimit}
					rows={1}
					cols={this.state.value.length || 1}
				/>
			</div>
		);
	}
}

SmallTextAreaInput.propTypes = {
	value: PropTypes.string,
	fontSize: PropTypes.number,
	classes: PropTypes.shape({
		area: PropTypes.string,
		container: PropTypes.string,
	}),
	updateValue: PropTypes.func,
	fontWeight: PropTypes.number,
	leftPadding: PropTypes.number,
	charLimit: PropTypes.number,
};

SmallTextAreaInput.defaultProps = {
	value: '',
	fontSize: 20,
	fontWeight: 400,
	leftPadding: 0,
	charLimit: 15,
	classes: {
		area: '',
		container: '',
	},
	updateValue: x => null,
};

export default withStyles(styles)(SmallTextAreaInput);
