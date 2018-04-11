import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AmountInput from './AmountInput';

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 12,
		paddingBottom: 12,
		borderBottom: '2px solid #F0F0F0',
		'&:last-child': {
			borderBottom: 'none',
		},
	},
};

function Ingredient(props) {
	const { name, amount, unit, scaling } = props.ingredient;
	const { container } = props.classes;
	return (
		<li className={container}>
			<div>{`${name}  `}</div>
			<AmountInput
				amount={amount}
				unit={unit}
				scalingFactor={props.scalingFactor}
			/>
		</li>
	);
}

Ingredient.propTypes = {
	scalingFactor: PropTypes.number,
	ingredient: PropTypes.shape({
		name: PropTypes.string,
		amount: PropTypes.number,
		unit: PropTypes.string,
		scaling: PropTypes.number,
	}),
};

Ingredient.defaultProps = {
	scalingFactor: 1,
	ingredient: {
		name: 'ingredient',
		amount: 0,
		unit: '',
		scaling: 0,
	},
};

export default withStyles(styles)(Ingredient);
