import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Typography from "material-ui/Typography";
import Toolbar from "material-ui/Toolbar";
import NavbarDrawer from "./NavbarDrawer.js";

const styleSheet = createStyleSheet(theme => ({
	flex: {
		display: "flex",
		justifyContent: "space-between"
	},
	flexGroup: {
		display: "flex",
		justifyContent: "space-around",
		minWidth: "400px",
		"@media(max-width: 600px)": {
			display: "none"
		}
	},
	navFont: {
		color: "white",
		padding: "5px"
	},
	iconGroup: {
		"@media(min-width:601px)": {
			display: "none"
		}
	},
	active: {
		borderBottom: "2px solid red"
	}
}));

const Navbar = props => {
	const classes = props.classes;
	const aboutActive = props.activePage == "about" ? classes.active : "";
	const portfolioActive =
		props.activePage == "portfolio" ? classes.active : "";
	const connectActive = props.activePage == "connect" ? classes.active : "";

	return (
		<div>
			<AppBar>
				<Toolbar className={classes.flex}>
					<div>
						<Typography type="title" className={classes.navFont}>
							Ian Sudderth
						</Typography>
					</div>
					<div className={classes.flexGroup}>
						<Typography
							className={`${classes.navFont} ${aboutActive}`}
							type="title"
						>
							About
						</Typography>
						<Typography
							className={`${classes.navFont} ${portfolioActive}`}
							type="title"
						>
							Portfolio
						</Typography>
						<Typography
							className={`${classes.navFont} ${connectActive}`}
							type="title"
						>
							Connect
						</Typography>
					</div>
					<div className={classes.iconGroup}>
						<NavbarDrawer activePage={props.activePage} />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

Navbar.propTypes = {
	classes: PropTypes.object,
	activePage: PropTypes.string
};

export default withStyles(styleSheet)(Navbar);
