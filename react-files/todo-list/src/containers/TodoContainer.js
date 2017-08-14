import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "../components/List";
import { connect } from "react-redux";
import {
	newItem,
	changeBaseItem,
	completeItem,
	deleteItem,
	reorderItem,
	changeColor,
	updateItem,
	updateDataThrottled
} from "../actions";
import { bindActionCreators } from "redux";
// import style from "../components/ListItem/style.css";
import ListHeader from "../components/ListHeader.js";
import Card from "material-ui/Card";
// import _ from 'lodash'
import { withStyles, createStyleSheet } from "material-ui/styles";

const styleSheet = createStyleSheet("CardContainer", {
	card: {
		margin: 0
	},
	"@media (min-width:768px)": {
		card: {
			margin: 16
		}
	}
});

class TodoContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: ""
		};
		this.inputUpdate = this.inputUpdate.bind(this);
		this.newItemAction = this.newItemAction.bind(this);
		this.changeBaseComposer = this.changeBaseComposer.bind(this);
		this.completeItemComposer = this.completeItemComposer.bind(this);
		this.deleteItemComposer = this.deleteItemComposer.bind(this);
		this.reorderItemComposer = this.reorderItemComposer.bind(this);
		this.generateComplete = this.generateComplete.bind(this);
		this.changeColorComposer = this.changeColorComposer.bind(this);
		this.updateItemDispatch = this.updateItemDispatch.bind(this);
		this.updateDataDispatch = this.updateDataDispatch.bind(this);
	}

	inputUpdate(event) {
		this.setState({ newItem: event.target.value });
	}

	newItemAction(content) {
		this.props.newItem(content, this.props.baseItem);
		this.setState({ newItem: "" }, () => {});
	}

	changeBaseComposer(id) {
		var changeBaseItem = this.props.changeBaseItem;
		return function() {
			changeBaseItem(id);
		};
	}

	deleteItemComposer(id) {
		let deleteItemDispatch = this.props.deleteItem;
		return function() {
			deleteItemDispatch(id);
		};
	}

	completeItemComposer(id) {
		let completeItemDispatch = this.props.completeItem;
		return function() {
			completeItemDispatch(id);
		};
	}

	reorderItemComposer(id, oldIndex, newIndex) {
		let reorderItemDispatch = this.props.reorderItem;
		return function() {
			reorderItemDispatch(id, oldIndex, newIndex);
		};
	}

	generateComplete() {
		var completeCount = this.props.items[this.props.baseItem]
			.completeChildren.length;
		var totalCount =
			this.props.items[this.props.baseItem].incompleteChildren.length +
			completeCount;
		return `( ${completeCount} / ${totalCount} Complete )`;
	}

	changeColorComposer(id, color) {
		let changeColorDispatch = this.props.changeColor;
		return function() {
			changeColorDispatch(id, color);
		};
	}

	updateItemDispatch(id, newText) {
		this.props.updateItem(id, newText);
	}

	updateDataDispatch() {
		const id = this.props.listID;
		const newState = {
			items: this.props.items,
			baseItem: this.props.baseItem
		};
		this.props.updateData(id, { id, newState });
	}

	componentDidUpdate() {
		this.updateDataDispatch();
	}

	render() {
		var currentItem = this.props.items[this.props.baseItem];
		return (
			<Card className={this.props.classes.card}>
				<ListHeader
					baseItem={this.props.baseItem}
					baseItemText={currentItem.content}
					currentParent={currentItem.parent}
					changeBaseComposer={this.changeBaseComposer}
					changeColorComposer={this.changeColorComposer}
					counterText={this.generateComplete()}
					items={this.props.items}
					newItemAction={this.newItemAction}
					updateItem={this.updateItemDispatch}
					updateData={this.updateDataDispatch}
					completeItemComposer={this.completeItemComposer}
				/>
				<List
					items={this.props.items}
					baseItem={this.props.baseItem}
					changeBaseComposer={this.changeBaseComposer}
					deleteItemComposer={this.deleteItemComposer}
					completeItemComposer={this.completeItemComposer}
					reorderItemComposer={this.reorderItemComposer}
					changeColorComposer={this.changeColorComposer}
					updateItem={this.updateItemDispatch}
				/>
			</Card>
		);
	}
}

TodoContainer.propTypes = {
	baseItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	items: PropTypes.object,
	classes: PropTypes.object,
	listID: PropTypes.string,
	newItem: PropTypes.func,
	changeBaseItem: PropTypes.func,
	completeItem: PropTypes.func,
	deleteItem: PropTypes.func,
	reorderItem: PropTypes.func,
	changeColor: PropTypes.func,
	updateItem: PropTypes.func,
	updateData: PropTypes.func
};

function mapStateToProps({ items, baseItem }) {
	return { items, baseItem };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			newItem,
			changeBaseItem,
			completeItem,
			deleteItem,
			reorderItem,
			changeColor,
			updateItem,
			updateData: updateDataThrottled
		},
		dispatch
	);
}

export default withStyles(styleSheet)(
	connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
);
