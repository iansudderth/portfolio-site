import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Navbar from "./Navbar.js";

const styles = createStyleSheet(theme => ({
	test: {
		color: "red"
	}
}));

const Layout = props => {
	return (
		<div>
			<Navbar />
			<h1 className={props.classes.test}>Hello Again</h1>
		</div>
	);
};

Layout.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(Layout);
