import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
	step: {
		paddingTop: 12,
		paddingBottom: 12,
	},
};

function StepItem(props) {
	const { step } = props.classes;
	return (
		<li className={step}>
			{props.step}
		</li>
	);
}

StepItem.propTypes = {
	step: PropTypes.string,
};

StepItem.defaultProps = {
	step: 'Do this thing with these ingredients',
};

export default withStyles(styles)(StepItem);
