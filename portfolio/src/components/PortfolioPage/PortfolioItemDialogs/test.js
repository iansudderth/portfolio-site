import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { DialogActions } from "material-ui/Dialog";
import Typography from "material-ui/Typography";

const styleSheet = createStyleSheet({
	container: {
		padding: "24px"
	}
});

const TestDialog = props => {
	const classes = props.classes;

	return (
		<div className={classes.container}>
			<Typography type="headline">
				Something about this project
			</Typography>
			<Typography type="body1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
				non dolores architecto eius nulla minima blanditiis, molestias
				iusto nisi quod. Magni dicta obcaecati, ex facilis sint nulla,
				repudiandae velit blanditiis!
			</Typography>
			<Typography type="headline">
				Something about this project
			</Typography>
			<Typography type="body1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
				non dolores architecto eius nulla minima blanditiis, molestias
				iusto nisi quod. Magni dicta obcaecati, ex facilis sint nulla,
				repudiandae velit blanditiis!
			</Typography>
		</div>
	);
};

TestDialog.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styleSheet)(TestDialog);
