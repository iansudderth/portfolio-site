import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
import ListItem from "./ListItem.js";
import List from "material-ui/List";
import { withStyles, createStyleSheet } from "material-ui/styles";
import {
	fadedColorParser,
	textColorParser
} from "../helpers/colorParser.js";

const styleSheet = createStyleSheet("CompleteList", {
	container: {
		margin: 0,
		padding: 0
	}
});

const CompleteList = props => {
	const classes = props.classes;

	return (
		<List className={classes.container}>
			{props.items.map(value => {
				return (
					<ListItem
						key={`item-${value.id}`}
						value={value}
						changeBaseComposer={props.changeBaseComposer}
						deleteItemComposer={props.deleteItemComposer}
						completeItemComposer={props.completeItemComposer}
						changeColorComposer={props.changeColorComposer}
						itemColor={fadedColorParser(value.color)}
						textColor={textColorParser(value.color)}
						updateItem={props.updateItem}
					/>
				);
			})}
		</List>
	);
};

CompleteList.propTypes = {
	classes: PropTypes.object,
	updateItem: PropTypes.func,
	items: PropTypes.array
};

export default withStyles(styleSheet)(CompleteList);
