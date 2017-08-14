import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import ChevronRight from "material-ui-icons/ChevronRight";
import NewItemForm from "./NewItemForm.js";
import {
	primaryColorParser,
	fadedColorParser,
	textColorParser,
	accentColorParser,
	accentTextColorParser,
	fadedAccentColorParser
} from "../helpers/colorParser.js";
import HeaderMenu from "./HeaderMenu.js";
import EditableTextArea from "./EditableTextArea.js";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";

const styleSheet = createStyleSheet("Header", {
	titleContainer: {
		padding: 16,
		display: "flex"
	},
	titleText: {
		flexGrow: 1
	},
	crumb: {
		alignItems: "center",
		display: "inline-flex",
		cursor: "pointer",
		"&:hover": {
			textDecoration: "underline"
		}
	},
	crumbContainer: {
		padding: 16
	}
});

const ListHeader = props => {
	const classes = props.classes;
	const currentItemColor = props.items[props.baseItem].color;
	const incompleteColor = primaryColorParser(currentItemColor);
	const incompleteTextColor = textColorParser(currentItemColor);
	const incompleteAccentColor = accentColorParser(currentItemColor);
	const completeAccentColor = fadedAccentColorParser(currentItemColor);
	const incompleteAccentTextColor = accentTextColorParser(currentItemColor);
	const complete =
		props.baseItem === "root"
			? false
			: props.items[props.baseItem].complete;

	const completeColor = fadedColorParser(currentItemColor);
	const textColor = complete ? "#000000" : incompleteTextColor;
	const bgColor = complete ? completeColor : incompleteColor;
	const accentColor = complete ? completeAccentColor : incompleteAccentColor;
	const accentTextColor = complete ? "#000000" : incompleteAccentTextColor;

	const headerText = props.items[props.baseItem].content;

	const BreadCrumb = () => {
		let trail = [];
		let current = props.baseItem;
		let counter = 0;
		if (current === "root") {
			trail = ["root"];
		} else {
			while (props.items[current].parent !== "root" && counter < 10) {
				trail = [current, ...trail];
				current = props.items[current].parent;
				counter++;
			}
			trail = ["root", current, ...trail];
		}
		return (
			<Typography
				type={"body1"}
				className={props.classes.crumbContainer}
				style={{ color: textColor }}
			>
				{trail.map((item, index) => {
					return (
						<span
							key={`breadcrumb-${index}`}
							className={props.classes.crumb}
							onClick={props.changeBaseComposer(item)}
						>
							{props.items[item].content}
							{index < trail.length - 1
								? <ChevronRight />
								: ""}{" "}
						</span>
					);
				})}
			</Typography>
		);
	};

	return (
		<div
			style={{
				backgroundColor: bgColor,
				color: textColor,
				transition: ".5s"
			}}
		>
			<div className={classes.titleContainer}>
				{props.baseItem === "root"
					? <IconButton />
					: <Checkbox
							checked={complete}
							onClick={props.completeItemComposer(props.baseItem)}
							style={{ color: textColor }}
						/>}
				<div className={classes.titleText}>
					<EditableTextArea
						primary={headerText}
						secondary={props.counterText}
						textColor={textColor}
						rawText={headerText}
						updateItem={props.updateItem}
						id={props.baseItem}
						complete={complete}
						header={true}
					/>
				</div>
				<HeaderMenu
					textColor={textColor}
					baseItem={props.baseItem}
					changeColorComposer={props.changeColorComposer}
				/>
			</div>
			<Divider />
			<BreadCrumb />
			<Divider />
			<NewItemForm
				newItemAction={props.newItemAction}
				textColor={textColor}
				accentColor={accentColor}
				accentTextColor={accentTextColor}
			/>
			<Divider />
		</div>
	);
};

ListHeader.propTypes = {
	newItemAction: PropTypes.func,
	changeColorComposer: PropTypes.func,
	baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	updateItem: PropTypes.func,
	counterText: PropTypes.string,
	completeItemComposer: PropTypes.func,
	items: PropTypes.object,
	classes: PropTypes.object
};

export default withStyles(styleSheet)(ListHeader);
