import React from "react";
import PropTypes from "prop-types";
import Typography from 'material-ui/Typography'
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styles = createStyleSheet(theme => ({
	test:{
		color:'red'
	}
}))

const Layout = props => {
	return (
		<div>
			<h1 className={props.classes.test}>Hello Again</h1>
		</div>
		)
}

export default withStyles(styles)(Layout)