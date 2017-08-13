import React, { Component } from "react";
import PropTypes from "prop-types";
import Drawer from "material-ui/Drawer";
import List, { ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Typography from "material-ui/Typography";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { indigo, grey } from "material-ui/colors";

const styleSheet = createStyleSheet({
	activePage: {
		borderBottom: "2px solid black",
		paddingBottom: "5px"
	},
	inactivePage: {
		"&:hover": {
			borderBottom: `2px solid ${grey[500]}`,
			paddingBottom: "5px"
		}
	},
	drawerItem: {
		justifyContent: "center"
	},
	drawerText: {
		padding: "7px",
		boxSizing: "border-box",
		cursor: "pointer"
	}
});

class NavbarDrawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	openDrawer = () => {
		this.setState({ open: true });
	};

	closeDrawer = () => {
		this.setState({ open: false });
	};

	changePageComposer = page => {
		const closeDrawer = this.closeDrawer;
		const changePage = this.props.changePageComposer(page);
		return () => {
			changePage();
			closeDrawer();
		};
	};

	render() {
		const classes = this.props.classes;
		const aboutActive =
			this.props.activePage == "about"
				? classes.activePage
				: classes.inactivePage;
		const portfolioActive =
			this.props.activePage == "portfolio"
				? classes.activePage
				: classes.inactivePage;
		const connectActive =
			this.props.activePage == "connect"
				? classes.activePage
				: classes.inactivePage;
		return (
			<div>
				<IconButton
					color="contrast"
					aria-label="Menu"
					onClick={
						this.state.open ? this.closeDrawer : this.openDrawer
					}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					anchor="top"
					open={this.state.open}
					onRequestClose={this.closeDrawer}
				>
					<List>
						<ListItem className={classes.drawerItem}>
							<Typography
								type="title"
								className={`${aboutActive} ${classes.drawerText}`}
								onClick={this.changePageComposer("about")}
							>
								About
							</Typography>
						</ListItem>
						<ListItem className={classes.drawerItem}>
							<Typography
								type="title"
								className={`${portfolioActive} ${classes.drawerText}`}
								onClick={this.changePageComposer("portfolio")}
							>
								Portfolio
							</Typography>
						</ListItem>
						<ListItem className={classes.drawerItem}>
							<Typography
								type="title"
								className={`${connectActive} ${classes.drawerText}`}
								onClick={this.changePageComposer("connect")}
							>
								Connect
							</Typography>
						</ListItem>
					</List>
				</Drawer>
			</div>
		);
	}
}

NavbarDrawer.propTypes = {
	classes: PropTypes.object,
	activePage: PropTypes.string,
	changePageComposer: PropTypes.func
};

export default withStyles(styleSheet)(NavbarDrawer);
