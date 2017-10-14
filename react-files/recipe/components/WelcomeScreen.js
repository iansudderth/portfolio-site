import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
	container: {
		maxWidth: 500,
		margin: '12px auto',
		paddingLeft: 12,
		paddingRight: 12,
	},
	headingText: {
		fontSize: 30,
	},
	bodyText: {
		fontSize: 18,
	},
};

function WelcomeScreen(props) {
	const { container, headingText, bodyText } = props.classes;

	return (
		<div className={container}>
			<Card>
				<CardContent>
					<Typography type="headline" className={headingText}>
						Parametric Recipes
					</Typography>
					<br />
					<Typography className={bodyText}>
						Inspired by <em>The Modernist Cuisine</em>, parametric
						recipes are a way of writing recipes that makes scaling
						ingredients easier and makes the connection between
						ingredients and procedure more explicit.
					</Typography>
					<br />
					<Typography className={bodyText}>
						Each section breaks down only the ingredients needed for
						a set of steps, making it easier to see the amounts
						needed at any point.
					</Typography>
					<br />
					<Typography className={bodyText}>
						As a bonus, any number in the ingredients list or
						serving size can be edited. Simply click on the number
						and start typing. As you type, all other numbers will
						update automatically to stay in proportion. Need 10
						portions instead of 8? Only have 500g of potatoes? No
						problem, change those numbers and everything else will
						update automatically.
					</Typography>
					<br />
					<Typography className={bodyText}>
						Click on the button in the top right to select a recipe.
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default withStyles(styles)(WelcomeScreen);
