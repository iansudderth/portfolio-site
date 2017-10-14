import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import Ingredient from './Ingredient';
import Steps from './Steps';

const styles = {
  sectionContainer: {
    display: 'flex',
    borderBottom: `2px solid ${red[500]}`,
    fontSize: '20px',
    fontFamily: 'Roboto',
    '&:last-child': {
      border: 'none',
    },
    '@media(max-width: 768px)': {
      flexWrap: 'wrap',
      borderBottom: `3px solid ${red[500]}`,
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  ingredientSection: {
    width: '50%',
    '& ul': {
      paddingLeft: 12,
      margin: 0,
    },
    '@media(max-width: 768px)': {
      width: '100%',
      paddingRight: 12,
    },
  },
  stepsSection: {
    width: '50%',
    paddingRight: 12,
    paddingLeft: 12,
    '@media(max-width: 768px)': {
      width: '100%',
      borderTop: `2px solid ${red[100]}`,
    },
  },
};

function Section(props) {
  const { sectionContainer, ingredientSection, stepsSection } = props.classes;
  return (
    <div className={sectionContainer}>
      <div className={ingredientSection}>
        <ul>
          {props.ingredientsArray.map(ingredient => (
            <Ingredient
              key={`ingredient-${ingredient.name}-${ingredient.key}`}
              scalingFactor={props.scalingFactor}
              ingredient={ingredient}
            />
          ))}
        </ul>
      </div>
      <div className={stepsSection}>
        <Steps steps={props.steps} startingNumber={props.stepsStartingNumber} />
      </div>
    </div>
  );
}

Section.propTypes = {
  ingredientsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
      unit: PropTypes.string,
      scaling: PropTypes.number,
      key: PropTypes.number,
    })
  ),
  scalingFactor: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      key: PropTypes.number,
    })
  ),
  stepsStartingNumber: PropTypes.number,
};

Section.defaultProps = {
  ingredientsArray: [],
  scalingFactor: 1,
  steps: [],
  stepsStartingNumber: 1,
};

export default withStyles(styles)(Section);
