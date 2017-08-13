import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

class NavbarDrawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	render() {
		return (
			<IconButton color="contrast" aria-label="Menu">
				<MenuIcon />
			</IconButton>
		);
	}
}

export default NavbarDrawer;
