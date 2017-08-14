import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import ListItem from "./ListItem.js";
import List from "material-ui/List";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { primaryColorParser, textColorParser } from "../helpers/colorParser.js";

const styleSheet = createStyleSheet("IncompleteList", {
	container: {
		listStyle: "none",
		padding: 0,
		margin: 0
	},
	root: {
		padding: 0
	},
	helper: {
		transition: 0
	}
});

const SortableList = SortableContainer(props => {
	return (
		<List className={props.classForList}>
			{props.items.map((value, index) => {
				return (
					<SortableListItem
						key={`item-${value.id}`}
						index={index}
						value={value}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
						changeColorComposer={props.changeColorComposer}
						bgColorComposer={props.bgColorComposer}
						textColorComposer={props.textColorComposer}
						updateItem={props.updateItem}
					/>
				);
			})}
		</List>
	);
});

const SortableListItem = SortableElement(props => {
	return (
		<ListItem
			value={props.value}
			changeBaseComposer={props.changeBaseComposer}
			deleteItemComposer={props.deleteItemComposer}
			completeItemComposer={props.completeItemComposer}
			changeColorComposer={props.changeColorComposer}
			itemColor={props.bgColorComposer(props.value.color)}
			textColor={props.textColorComposer(
				props.value.color,
				props.value.complete
			)}
			updateItem={props.updateItem}
		/>
	);
});

const IncompleteList = props => {
	const classes = props.classes;

	function handleSort({ oldIndex, newIndex }) {
		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return (
		<div>
			<SortableList
				items={props.items}
				useDragHandle={true}
				onSortEnd={handleSort}
				changeBaseComposer={props.changeBaseComposer}
				deleteItemComposer={props.deleteItemComposer}
				completeItemComposer={props.completeItemComposer}
				classForList={classes.root}
				changeColorComposer={props.changeColorComposer}
				bgColorComposer={primaryColorParser}
				textColorComposer={textColorParser}
				updateItem={props.updateItem}
				helperClass={props.classes.helper}
			/>
		</div>
	);
};

IncompleteList.propTypes = {
	classes: PropTypes.object,
	updateItem: PropTypes.func,
	changeColorComposer: PropTypes.func,
	completeItemComposer: PropTypes.func,
	deleteItemComposer: PropTypes.func,
	changeBaseComposer: PropTypes.func,
	items: PropTypes.array,
	reorderItemComposer: PropTypes.func,
	parentID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default withStyles(styleSheet)(IncompleteList);
