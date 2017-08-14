import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { DialogActions } from "material-ui/Dialog";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

const styleSheet = createStyleSheet({
	container: {
		padding: "24px"
	}
});

const TodoDialog = props => {
	const classes = props.classes;

	return (
		<div className={classes.container}>
			<Typography type="headline">Recursive Todo List</Typography>
			<br />
			<Typography type="body1">
				{
					"For this project, I wanted to take a classic app, put a twist on it, and then execute it to a very polished level.  For a Todo List application, I thought it would be fun to have it so that each list item would itself be a todo-list.  This is also a greate use of React, as it would be highly interactive."
				}
			</Typography>
			<br />
			<Typography type="headline">
				Development Process and Challenges
			</Typography>
			<br />
			<Typography type="body1">
				{
					"When doing the initial planning of the application, I made some decisions about the library and frameworks I'd be using.  I wanted it to be a React app, so that was a given, and I would need some sort of state management, so Redux was in.  I also planned to have the app render server side to speed up load times, so I chose Material-UI as my component kit, since it played nicely with SSR and I had some familiarity with it.  This ended up working out well, as I later settled on using NextJS for SSR, and NextJS and Material-UI work without a ton of headaches.  I also knew I wanted the list to be reorderable with drag and drop, and to have that feature work on mobile devices, so React Sortable was integrated early on."
				}
			</Typography>
			<br />
			<Typography type="body1">
				{
					"The first challenge was to structure the Redux store in a way that would allow easy access to elements that were nested quite deeply.  This would be especially challenging as Redux doesn't work great with deeply nested data structures (perhaps integrating with Immutable.js and Redux-Immutable would help this), so instead I structured the store like a database in a object.  Each item has a unique key that stores all the information for that item, including a list of children items and the parent item.  When a new item is created, it is simply added to the object with a new key and its parent's child list is updated.  Using this method, the overhead for nesting lists within each other is negligeable."
				}
			</Typography>
			<br />
			<Typography type="body1">
				{
					"The value of Redux became apparent later on in the process, as adding features that manipulated the data structure could be abstracted to action dispatches and reducers without dissrupting the rest of the application.  Even better was that saving the state of the app to a database was as simple as saving the Redux store to the database (Redux-Thunk enabled the async code and AJAX call throttling to work seamlessly), which could then be loaded as initial state later on."
				}
			</Typography>
			<br />
			<Typography type="headline">
				Libraries and Frameworks Used
			</Typography>
			<Typography type="subheading">
				<a href="http://expressjs.com/">Express</a>
				<br />
				<a href="http://mongoosejs.com/">Mongoose</a>
				<br />
				<a href="https://facebook.github.io/react/"> React</a>
				<br />
				<a href="https://github.com/zeit/next.js/">Next.js</a>
				<br />
				<a href="http://redux.js.org/">Redux</a>
				<br />
				<a href="https://github.com/gaearon/redux-thunk">Redux-Thunk</a>
				<br />
				<a href="http://www.material-ui.com/#/">Material-UI</a>
				<br />
				<a href="https://github.com/mzabriskie/axios">Axios</a>
				<br />
				<a href="https://github.com/clauderic/react-sortable-hoc">
					React Sortable
				</a>
				<br />
				<a href="https://lodash.com/">Lodash</a>
			</Typography>
		</div>
	);
};

TodoDialog.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styleSheet)(TodoDialog);
