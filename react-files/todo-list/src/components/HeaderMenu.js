import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Settings from "material-ui-icons/Settings";
import Menu from "material-ui/Menu";
import ColorMenu from "./ColorMenu.js";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";

class HeaderMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			anchorEl: undefined
		};

		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.colorItemClickHandler = this.colorItemClickHandler.bind(this);
	}

	openMenu(event) {
		this.setState({ open: true, anchorEl: event.currentTarget });
	}

	closeMenu() {
		this.setState({ open: false });
	}

	colorItemClickHandler(colorName) {
		var close = this.closeMenu;
		let changeColor = this.props.changeColorComposer(
			this.props.baseItem,
			colorName
		);
		return function() {
			changeColor();
			close();
		};
	}

	render() {
		return (
			<div>
				<IconButton
					onClick={this.openMenu}
					style={{ color: this.props.textColor }}
				>
					<Settings />
				</IconButton>
				<Menu
					id={`${this.props.baseItem}-menu`}
					open={this.state.open}
					onRequestClose={this.closeMenu}
					anchorEl={this.state.anchorEl}
				>
					<Typography
						type={"subheading"}
						align={"center"}
						style={{ outline: "none", paddingLeft: 16 }}
					>
						Change Color
					</Typography>
					<Divider />
					<ColorMenu clickHandler={this.colorItemClickHandler} />
				</Menu>
			</div>
		);
	}
}

HeaderMenu.propTypes = {
	baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	changeColorComposer: PropTypes.func
};

export default HeaderMenu;
