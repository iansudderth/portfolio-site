import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";

const styleSheet = createStyleSheet({
	root: {
		maxWidth: "350px"
	}
});

class PortfolioItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false
		};
	}

	render() {
		const item = this.props.item;
		const classes = this.props.classes;
		return (
			<Grid item xs={12} md={6} lg={3} className={classes.root}>
				<Card>
					<CardMedia>
						<img src={item.image} alt="" />
					</CardMedia>
					<CardContent>
						<h1>
							{item.title}
						</h1>
						<h2>
							{item.description}
						</h2>
					</CardContent>
				</Card>
			</Grid>
		);
	}
}

PortfolioItem.propTypes = {
	item: PropTypes.object,
	classes: PropTypes.object
};

export default withStyles(styleSheet)(PortfolioItem);
