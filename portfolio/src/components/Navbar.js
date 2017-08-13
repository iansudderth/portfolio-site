import React from "react";
import { withStyles, createStyleSheet } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Typography from "material-ui/Typography";
import Toolbar from "material-ui/Toolbar";
import { Tab } from "material-ui/Tabs";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styleSheet = createStyleSheet({
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
		color: "white"
	},
	iconGroup: {
		"@media(min-width:601px)": {
			display: "none"
		}
	}
});

const Navbar = props => {
	const classes = props.classes;
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
						<Typography className={classes.navFont} type="title">
							About
						</Typography>
						<Typography className={classes.navFont} type="title">
							Portfolio
						</Typography>
						<Typography className={classes.navFont} type="title">
							Connect
						</Typography>
					</div>
					<div className={classes.iconGroup}>
						<IconButton color="contrast" aria-label="Menu">
							<MenuIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withStyles(styleSheet)(Navbar);
