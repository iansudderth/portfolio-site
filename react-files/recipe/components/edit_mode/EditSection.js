import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import DeleteForever from 'material-ui-icons/DeleteForever';
import EditIngredient from './EditIngredient';
import EditStep from './EditStep';
import EnterExitWrapper from '../helpers/EnterExitWrapper';

import {
  editStep,
  newStep,
  deleteStep,
  newIngredient,
  editIngredientName,
  editIngredientAmount,
  editIngredientUnit,
  deleteIngredient,
  deleteSection,
} from '../../actions';

const styles = {
  sectionContainer: {
    display: 'flex',
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
  stepsContainer: {
    margin: 0,
    marginLeft: 18,
    paddingLeft: 12,
    paddingTop: 6,
  },
  newStepContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingTop: 12,
  },
  newIngredientContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingTop: 12,
  },
  controlsContainer: {
    borderBottom: `2px solid ${red[500]}`,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 12,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: red['A700'],
    },
  },
};

class EditSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAnimateOnMount: false,
    };
  }

  componentDidMount = () => {
    this.setState({ shouldAnimateOnMount: true });
  };

  newStepDispatcher = () => {
    this.props.newStep(this.props.sectionIndex);
  };

  deleteStepDispatcher = stepIndex => {
    this.props.deleteStep(this.props.sectionIndex, stepIndex);
  };

  newIngredientDispatcher = () => {
    this.props.newIngredient(this.props.sectionIndex);
  };

  deleteSectionDispatcher = () => {
    this.props.deleteSection(this.props.sectionIndex);
  };

  render() {
    const {
      sectionContainer,
      ingredientSection,
      stepsSection,
      stepsContainer,
      newStepContainer,
      newIngredientContainer,
      controlsContainer,
      buttonContainer,
      deleteButton,
    } = this.props.classes;

    return (
      <div className={controlsContainer}>
        <div className={buttonContainer}>
          <Button
            className={deleteButton}
            raised
            dense
            onClick={this.deleteSectionDispatcher}
          >
            <DeleteForever />
            {'Delete Section'}
          </Button>
        </div>
        <div className={sectionContainer}>
          <div className={ingredientSection}>
            <EnterExitWrapper
              parentComponent="ul"
              enterSpring={false}
              runOnMount={this.state.shouldAnimateOnMount}
            >
              {this.props.ingredientsArray.map((ingredient, index) => (
                <EditIngredient
                  key={`ingredient-${ingredient.key}`}
                  ingredientName={ingredient.name}
                  ingredientAmount={ingredient.amount}
                  ingredientUnit={ingredient.unit}
                  sectionIndex={this.props.sectionIndex}
                  ingredientIndex={index}
                  deleteIngredient={this.props.deleteIngredient}
                  editIngredientName={this.props.editIngredientName}
                  editIngredientAmount={this.props.editIngredientAmount}
                  editIngredientUnit={this.props.editIngredientUnit}
                />
              ))}
            </EnterExitWrapper>
            <div className={newIngredientContainer}>
              <Button
                raised
                color="primary"
                onClick={this.newIngredientDispatcher}
              >
                <Add />
                {'New Ingredient'}
              </Button>
            </div>
          </div>
          <div className={stepsSection}>
            <EnterExitWrapper
              parentClass={stepsContainer}
              parentComponent="ol"
              enterSpring={false}
              runOnMount={this.state.shouldAnimateOnMount}
            >
              {this.props.steps.map((step, index) => (
                <EditStep
                  key={`step-${step.key}`}
                  startStepAt={this.props.startStepAt}
                  stepText={step.content}
                  sectionIndex={this.props.sectionIndex}
                  stepIndex={index}
                  editStep={this.props.editStep}
                  deleteStep={this.deleteStepDispatcher}
                />
              ))}
            </EnterExitWrapper>
            <div className={newStepContainer}>
              <Button raised color={'primary'} onClick={this.newStepDispatcher}>
                <Add />
                {'New Step'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditSection.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
  ingredientsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
      unit: PropTypes.string,
      scaling: PropTypes.number,
    })
  ).isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      key: PropTypes.number,
    })
  ).isRequired,
  stepsStartingNumber: PropTypes.number,
};

EditSection.defaultProps = {
  stepsStartingNumber: 1,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      editStep,
      newStep,
      deleteStep,
      newIngredient,
      editIngredientName,
      editIngredientAmount,
      editIngredientUnit,
      deleteIngredient,
      deleteSection,
    },
    dispatch
  );
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(EditSection)
);
