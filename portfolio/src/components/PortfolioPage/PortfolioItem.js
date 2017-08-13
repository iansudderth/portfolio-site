import React, { Component } from "react";
import PropTypes from "prop-types";

class PortfolioItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false
		};
	}

	render() {
		const item = this.props.item;
		return (
			<div>
				<img src={item.image} alt="" />
				<h1>
					{item.title}
				</h1>
				<h2>
					{item.description}
				</h2>
			</div>
		);
	}
}

PortfolioItem.propTypes = {
	item: PropTypes.object
};

export default PortfolioItem;
