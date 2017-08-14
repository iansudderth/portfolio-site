import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { Holdable, defineHold } from "react-touch";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";

const NonEditItem = props => {
	var lineStyle = props.complete ? { textDecoration: "line-through" } : {};
	const hold = defineHold({ updateEvery: 50, holdFor: 500 });
	return (
		<Holdable config={hold} onHoldComplete={props.updateHandler}>
			<div>
				<Typography
					type={"headline"}
					align={"center"}
					style={{ color: props.textColor, ...lineStyle }}
					onDoubleClick={props.updateHandler}
				>
					{props.primary}
				</Typography>
				<Typography
					type={"subheading"}
					align={"center"}
					style={{ color: props.textColor }}
					onDoubleClick={props.updateHandler}
				>
					{props.secondary}
				</Typography>
			</div>
		</Holdable>
	);
};

NonEditItem.propTypes = {
	primary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	secondary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	textColor: PropTypes.string,
	complete: PropTypes.bool,
	updateHandler: PropTypes.func
};

class EditableTextArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			editText: ""
		};

		this.TextContainer = this.TextContainer.bind(this);
		this.doubleClickHandler = this.doubleClickHandler.bind(this);
		this.EditItem = this.EditItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	EditItem() {
		return (
			<form onSubmit={this.handleBlur} style={{ width: "100%" }}>
				<TextField
					value={this.state.editText}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					fullWidth={true}
					autoFocus={true}
					InputProps={{
						style: {
							color: this.props.textColor
						}
					}}
				/>
			</form>
		);
	}

	handleChange(event) {
		this.setState({ editText: event.target.value });
	}

	handleBlur(event) {
		event.preventDefault();
		this.props.updateItem(this.props.id, this.state.editText);
		this.setState({ editMode: false });
	}

	TextContainer() {
		var EditItem = this.EditItem;
		if (this.state.editMode) {
			return <EditItem />;
		} else {
			return (
				<NonEditItem
					style={{
						color: this.props.textColor,
						padding: "0px",
						wordWrap: "break-word"
					}}
					complete={this.props.complete}
					updateHandler={this.doubleClickHandler}
					textColor={this.props.textColor}
					primary={this.props.primary}
					secondary={this.props.secondary}
				/>
			);
		}
	}

	doubleClickHandler() {
		this.setState({ editMode: true, editText: this.props.primary });
	}

	render() {
		var TextContainer = this.TextContainer;
		return <TextContainer />;
	}
}

EditableTextArea.propTypes = {
	primary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	secondary: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	textColor: PropTypes.string,
	complete: PropTypes.bool,
	updateItem: PropTypes.func,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default EditableTextArea;
