import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";

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
			dialogOpen: false
		};
	}

	openDialog = () => {
		this.setState({ dialogOpen: true });
	};

	closeDialog = () => {
		this.setState({ dialogOpen: false });
	};

	render() {
		const item = this.props.item;
		const classes = this.props.classes;
		const ItemDialog = item.dialog;
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
							{item.description}
						</Typography>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button dense onClick={this.openDialog}>
							About
						</Button>
						<Button dense>Launch</Button>
					</CardActions>
				</Card>
				<Dialog
					open={this.state.dialogOpen}
					onRequestClose={this.closeDialog}
				>
					{item.dialog ? <ItemDialog /> : ""}
				</Dialog>
			</Grid>
		);
	}
}

PortfolioItem.propTypes = {
	item: PropTypes.object,
	classes: PropTypes.object
};

export default withStyles(styleSheet)(PortfolioItem);
