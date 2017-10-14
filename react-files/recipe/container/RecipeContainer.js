import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Header from '../components/Header';
import Section from '../components/Section';
import WelcomeScreen from '../components/WelcomeScreen';

const styles = {
  container: {
    margin: 10,
  },
};

function generateSections(recipeArr, scalingFactor) {
  let stepsCount = 1;
  return recipeArr.map(section => {
    const startingNumber = stepsCount;
    stepsCount += section.procedure.length;

    return (
      <Section
        key={`section-${section.key}`}
        steps={section.procedure}
        ingredientsArray={section.ingredients}
        scalingFactor={scalingFactor}
        stepsStartingNumber={startingNumber}
      />
    );
  });
}

function RecipeContainer(props) {
  const { container } = props.classes;
  return (
    <div>
      {props.recipe ? (
        <Card className={container}>
          <div>
            <div>
              <Header
                title={props.recipe.title}
                serving={props.recipe.serving}
                scalingFactor={props.scalingFactor}
                recipeId={props.recipe._id}
                recipeHasPassword={props.recipe.password}
              />
            </div>
            <div>
              {generateSections(props.recipe.recipe, props.scalingFactor)}
            </div>
          </div>
        </Card>
      ) : (
        <WelcomeScreen />
      )}
    </div>
  );
}

RecipeContainer.propTypes = {
  scalingFactor: PropTypes.number,
  recipe: PropTypes.shape({
    title: PropTypes.string,
    serving: PropTypes.shape({
      amount: PropTypes.number,
      name: PropTypes.string,
    }),
    recipe: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number,
        unit: PropTypes.string,
        scaling: PropTypes.number,
      })
    ),
  }),
};

RecipeContainer.defaultProps = {
  scalingFactor: 1,
  recipe: {
    title: 'Placeholder Recipe Title',
    serving: {
      amount: 0,
      name: '',
    },
    recipe: [],
  },
};

function mapStateToProps({ recipe, scalingFactor }) {
  return { recipe, scalingFactor };
}

export default withStyles(styles)(connect(mapStateToProps)(RecipeContainer));
