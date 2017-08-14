import React, { Component } from "react";
import PropTypes from 'prop-types'
// import _ from 'lodash';
import { SortableHandle } from "react-sortable-hoc";
import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import Reorder from "material-ui-icons/Reorder";
import DeleteForever from "material-ui-icons/DeleteForever";
import Settings from "material-ui-icons/Settings";
import FormatListBulleted from "material-ui-icons/FormatListBulleted";
import {
	red,
	grey
} from "material-ui/colors";
import Button from "material-ui/Button";
import Menu from "material-ui/Menu";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import {
	primaryColorParser,
	fadedColorParser
} from "../helpers/colorParser.js";
import ListItemTextArea from "./ListItemTextArea.js";
import ColorMenu from "./ColorMenu.js";

const DragHandle = SortableHandle(props => {
	var activeStyle = props.complete ? {} : { cursor: "pointer" };
	var centerStyle = { display: "flex", alignItems: "center", margin: 12 };

	return (
		<span
			style={{ ...props.completeStyle, ...activeStyle, ...centerStyle }}
		>
			<Reorder />
		</span>
	);
});

class BaseListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			anchorEl: undefined
		};

		this.completeDisplay = this.completeDisplay.bind(this);
		this.content = this.content.bind(this);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.colorItemClickHandler = this.colorItemClickHandler.bind(this);
	}

	item = this.props.value;

	incompleteListStyle = {
		backgroundColor: primaryColorParser(this.item.color)
	};
	completeListStyle = { backgroundColor: fadedColorParser(this.item.color) };
	completeGrey = grey[500];
	completeLineStyle = this.item.complete
		? { color: this.completeGrey, textDecoration: "line-through" }
		: {};
	completeStyle = this.item.complete
		? { color: this.completeGrey }
		: { color: this.textColor };

	completeDisplay() {
		var completed = this.item.completeChildren.length;
		var total = completed + this.item.incompleteChildren.length;
		var displayTextStyle = this.props.value.complete
			? { color: this.completeGrey }
			: { color: this.props.textColor };
		if (total === 0) {
			return "";
		} else {
			return (
				<span
					style={displayTextStyle}
				>{`( ${completed} / ${total} complete)`}</span>
			);
		}
	}

	content() {
		var contentTextStyle = this.props.value.complete
			? { color: this.completeGrey, textDecoration: "line-through" }
			: { color: this.props.textColor };
		return (
			<span
				style={{
					...contentTextStyle,
					wordWrap: "break-word",
					wordBreak: "break-all"
				}}
			>
				{this.item.content}
			</span>
		);
	}

	openMenu(event) {
		this.setState({ open: true, anchorEl: event.currentTarget });
	}

	closeMenu() {
		this.setState({ open: false });
	}

	colorItemClickHandler(colorName) {
		var close = this.closeMenu;
		let changeColor = this.props.changeColorComposer(
			this.item.id,
			colorName
		);
		return function() {
			changeColor();
			close();
		};
	}

	render() {
		var textColor = this.props.value.complete
			? this.completeGrey
			: this.props.textColor;
		return (
			<ListItem
				divider={true}
				style={{
					transition: "all 0s, background-color .5s",
					backgroundColor: this.props.itemColor,
					padding: 12
				}}
			>
				<DragHandle
					completeStyle={{ color: textColor }}
					complete={this.item.complete}
				/>
				<Checkbox
					checked={this.item.complete}
					onClick={this.props.completeItemComposer(this.item.id)}
					style={{ color: textColor }}
				/>

				<ListItemTextArea
					primary={this.content()}
					secondary={this.completeDisplay()}
					textColor={textColor}
					rawText={this.item.content}
					updateItem={this.props.updateItem}
					id={this.item.id}
					complete={this.item.complete}
				/>

				<IconButton
					onClick={this.props.changeBaseComposer(this.item.id)}
					style={{ color: textColor }}
				>
					<FormatListBulleted />
				</IconButton>
				<IconButton
					onClick={this.openMenu}
					style={{ color: textColor }}
				>
					<Settings />
				</IconButton>
				<Menu
					id={`${this.item.id}-menu`}
					open={this.state.open}
					onRequestClose={this.closeMenu}
					anchorEl={this.state.anchorEl}
				>
					<Typography
						type={"subheading"}
						align={"center"}
						style={{ outline: "none", paddingLeft: 16 }}
					>
						Change Color
					</Typography>
					<Divider />
					<ColorMenu clickHandler={this.colorItemClickHandler} />
					<Divider />
					<div style={{ textAlign: "center" }}>
						<Button
							style={{
								color: "white",
								backgroundColor: red[500],
								marginTop: 8
							}}
							onClick={this.props.deleteItemComposer(
								this.item.id
							)}
						>
							<DeleteForever /> {"Delete Item"}
						</Button>
					</div>
				</Menu>
			</ListItem>
		);
	}
}

BaseListItem.propTypes = {
deleteItemComposer: PropTypes.func,
changeBaseComposer: PropTypes.func,
completeItemComposer: PropTypes.func,
itemColor: PropTypes.string,
textColor: PropTypes.string,
value: PropTypes.object,
bgColor: PropTypes.string,
updateItem: PropTypes.func,
changeColorComposer: PropTypes.func
};

export default BaseListItem;
