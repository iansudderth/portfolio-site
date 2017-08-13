import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Navbar from "./Navbar.js";
import AboutPage from "./AboutPage/";
import ConnectPage from "./ConnectPage/";
import PortfolioPage from "./PortfolioPage/";

const styles = createStyleSheet(theme => ({
	pageWrapper: {
		marginTop: "64px",
		"@media (max-width: 600px)": {
			marginTop: "56px"
		}
	}
}));

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: "portfolio"
		};
	}

	changePage = page => {
		this.setState({ activePage: page });
	};

	render() {
		const ActivePage = () => {
			switch (this.state.activePage) {
				case "about":
					return <AboutPage />;
				case "portfolio":
					return <PortfolioPage />;
				case "connect":
					return <ConnectPage />;
				default:
					return <AboutPage />;
			}
		};

		const classes = this.props.classes;
		return (
			<div>
				<Navbar
					activePage={this.state.activePage}
					changePage={this.changePage}
				/>
				<div className={classes.pageWrapper}>
					<ActivePage />
				</div>
			</div>
		);
	}
}

Layout.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(Layout);
