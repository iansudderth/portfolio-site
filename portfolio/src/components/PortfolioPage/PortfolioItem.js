import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

const styleSheet = createStyleSheet({
	root: {
		maxWidth: "350px"
	},
	cardImage: {
		width: "100%"
	},
	cardActions: {
		justifyContent: "space-between"
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
						<img
							src={item.image}
							alt=""
							className={classes.cardImage}
						/>
					</CardMedia>
					<CardContent>
						<Typography type={"headline"}>
							{item.title}
						</Typography>
						<Typography type={"subheading"}>
							{item.title}
						</Typography>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button dense>About</Button>
						<Button dense>Launch</Button>
					</CardActions>
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
