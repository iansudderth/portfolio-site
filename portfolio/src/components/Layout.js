import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Navbar from "./Navbar.js";

const styles = createStyleSheet(theme => ({
	test: {
		color: "red"
	}
}));

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: "about"
		};
	}

	changePage = page => {
		this.setState({ activePage: page });
	};

	render() {
		return (
			<div>
				<Navbar
					activePage={this.state.activePage}
					changePage={this.changePage}
				/>
				<h1 className={this.props.classes.test}>Hello Again</h1>
			</div>
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(Layout);
