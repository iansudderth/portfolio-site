import React from "react";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Avatar from "material-ui/Avatar";

const styleSheet = createStyleSheet({
	card: {
		padding: 24,
		marginTop: 24,
		transition: ".5s",
		"&:hover": {
			transform: "scale(1.025)"
		}
	},
	headline: {},
	icon: {
		float: "right",
		height: 100,
		width: 100,
		"@media(max-width: 480px)": {
			height: 50,
			width: 50
		}
	},
	textGroup: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: 100
	}
});

const ConnectPage = props => {
	const classes = props.classes;

	return (
		<Grid container justify="center">
			<Grid item xs={11} sm={10} md={9} lg={8}>
				<Card className={classes.card}>
					<Avatar
						src="/static/email-icon.png"
						className={classes.icon}
					/>
					<div className={classes.textGroup}>
						<Typography
							type="display1"
							className={classes.headline}
						>
							Email
						</Typography>
						<Typography type="headline">
							Ian.Sudderth@gmail.com
						</Typography>
					</div>
				</Card>
				<Card className={classes.card}>
					<Avatar
						src="/static/github-icon.png"
						className={classes.icon}
					/>
					<div className={classes.textGroup}>
						<Typography
							type="display1"
							className={classes.headline}
						>
							GitHub
						</Typography>
						<Typography type="headline">
							<a
								href="https://github.com/iansudderth"
								target="_blank"
								rel="noopener noreferrer"
							>
								github.com/iansudderth
							</a>
						</Typography>
					</div>
				</Card>
				<Card className={classes.card}>
					<Avatar
						src="/static/linked-in-icon.png"
						className={classes.icon}
					/>
					<div className={classes.textGroup}>
						<Typography
							type="display1"
							className={classes.headline}
						>
							LinkedIn
						</Typography>
						<Typography type="headline">
							<a
								href="http://www.linkedin.com/in/ian-sudderth"
								target="_blank"
								rel="noopener noreferrer"
							>
								View My Profile
							</a>
						</Typography>
					</div>
				</Card>
			</Grid>
		</Grid>
	);
};

export default withStyles(styleSheet)(ConnectPage);
