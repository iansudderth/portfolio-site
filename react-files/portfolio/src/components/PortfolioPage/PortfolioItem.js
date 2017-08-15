import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Dialog, { DialogActions } from "material-ui/Dialog";

const styleSheet = createStyleSheet({
	root: {
		maxWidth: "350px"
	},
	cardImage: {
		width: "100%"
	},
	cardActions: {
		justifyContent: "space-between"
	},
	dialog: {
		overflow: "scroll"
	},
	dialogActions: {
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
						{item.dialog
							? <Button dense onClick={this.openDialog}>
									About
								</Button>
							: <div />}
						{item.link
							? <Button dense href={item.link} target="_blank">
									Launch
								</Button>
							: <div />}
					</CardActions>
				</Card>
				<Dialog
					open={this.state.dialogOpen}
					onRequestClose={this.closeDialog}
					classes={{
						paper: classes.dialog
					}}
				>
					{item.dialog ? <ItemDialog /> : ""}
					<DialogActions className={classes.dialogActions}>
						{item.link
							? <Button href={item.link} target="_blank">
									Launch
								</Button>
							: <div />}
						{item.github
							? <Button href={item.github} target="_blank">
									GitHub
								</Button>
							: <div />}
						<Button onClick={this.closeDialog}>Close</Button>
					</DialogActions>
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
