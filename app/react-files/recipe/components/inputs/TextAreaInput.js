import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextareaAutosize from 'react-autosize-textarea';

const styles = {
	area: {
		resize: 'none',
		fontFamily: 'Roboto',
		display: 'flex',
		alignItems: 'baseline',
		fontSize: 20,
		width: '100%',
		border: 'none',
		padding: 0,
		background: 'none',
		'&:focus': {
			outline: 'none',
		},
	},
	container: {
		flexGrow: 1,
		display: 'inline-flex',
		width: '100%',
	},
};

class TextAreaInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value,
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ value: nextProps.value });
	}

	changeHandler = event => {
		let newValue = event.target.value;
		newValue = newValue.replace(/[\t\n\r]/g, '');
		newValue = newValue.replace(/^\s*/gm, '');
		this.setState({ value: newValue });
	};

	inputStyles = () => {
		const fontSize = { fontSize: this.props.fontSize };
		const fontWeight = { fontWeight: this.props.fontWeight };
		const leftPadding = { paddingLeft: this.props.leftPadding };

		return Object.assign({}, fontSize, fontWeight, leftPadding);
	};

	updateValue = () => {
		this.props.updateValue(this.state.value);
	};

	textareaRef = el => {
		this.innerTextarea = el;
	};

	keyPressHandler = event => {
		if (event.which === 13) {
			this.innerTextarea.blur();
		}
	};

	render() {
		const { area, container } = this.props.classes;
		return (
			<div className={container}>
				<TextareaAutosize
					onChange={this.changeHandler}
					className={area}
					style={this.inputStyles()}
					onBlur={this.updateValue}
					value={this.state.value}
					innerRef={this.textareaRef}
					onKeyPress={this.keyPressHandler}
				/>
			</div>
		);
	}
}

TextAreaInput.propTypes = {
	value: PropTypes.string,
	fontSize: PropTypes.number,
	classes: PropTypes.shape({
		area: PropTypes.string,
		container: PropTypes.string,
	}),
	updateValue: PropTypes.func,
	fontWeight: PropTypes.number,
	leftPadding: PropTypes.number,
};

TextAreaInput.defaultProps = {
	value: '',
	fontSize: 20,
	fontWeight: 300,
	leftPadding: 0,
	classes: {
		area: '',
		container: '',
	},
	updateValue: x => null,
};

export default withStyles(styles)(TextAreaInput);
