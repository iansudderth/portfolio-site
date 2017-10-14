import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import Button from 'material-ui/Button';
import {
  editTitle,
  editServingAmount,
  editServingUnit,
  publishRecipe,
  openSaveDialog,
  openDiscardChangesDialog,
  openUpdateDialog,
  openDeleteDialog,
} from '../../actions';
import NumberInput from '../inputs/NumberInput';
import TextAreaInput from '../inputs/TextAreaInput';
import SmallTextInput from '../inputs/SmallTextInput';
import SaveButtonAndDialog from './SaveButtonAndDialog';

const styles = {
  servingSection: {
    display: 'flex',
    margin: 0,
    marginTop: 12,
    alignItems: 'baseline',
  },
  title: {
    margin: 0,
  },
  container: {
    padding: 18,
    borderBottom: `4px double ${red[500]}`,
    marginBottom: 18,
    display: 'flex',
  },
  controlsContainer: {},
  textContainer: {
    flexGrow: 1,
  },
  saveDiscardContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  updateButton: {
    marginBottom: 12,
  },
  discardButton: {
    marginBottom: 12,
  },
  deleteButton: {
    color: 'white',
    backgroundColor: red[400],
    '&:hover': {
      backgroundColor: red[600],
    },
  },
};

function EditHeader(props) {
  const recipe = props.recipe;

  function publishRecipeDispatch(password) {
    props.publishRecipe(recipe, password);
  }

  const {
    servingSection,
    title,
    container,
    controlsContainer,
    textContainer,
    saveDiscardContainer,
    updateButton,
    discardButton,
    deleteButton,
  } = props.classes;

  return (
    <div className={container}>
      <div className={textContainer}>
        <h1 className={title}>
          <TextAreaInput
            value={recipe.title}
            updateValue={props.editTitle}
            fontSize={40}
            fontWeight={600}
          />
        </h1>
        <div className={servingSection}>
          <NumberInput
            amount={recipe.serving.amount}
            updateValue={props.editServingAmount}
            fontSize={30}
            fontWeight={400}
          />
          <SmallTextInput
            updateValue={props.editServingUnit}
            value={recipe.serving.unit}
            fontSize={30}
            fontWeight={400}
            leftPadding={4}
          />
        </div>
      </div>
      <div className={controlsContainer}>
        {props.recipe._id ? (
          <div className={saveDiscardContainer}>
            <Button
              color="primary"
              raised
              className={updateButton}
              onClick={props.openUpdateDialog}
            >
              {'Save Changes'}
            </Button>
            <Button
              color="accent"
              raised
              onClick={props.openDiscardChangesDialog}
              className={discardButton}
            >
              {'Discard Changes'}
            </Button>
            <Button
              raised
              className={deleteButton}
              onClick={props.openDeleteDialog}
            >
              {'Delete Recipe'}
            </Button>
          </div>
        ) : (
          <Button color="primary" raised onClick={props.openSaveDialog}>
            {'Save & Publish'}
          </Button>
        )}
      </div>
    </div>
  );
}

EditHeader.propTypes = {
  title: PropTypes.string,
  servingAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  servingUnit: PropTypes.string,
};

EditHeader.defaultProps = {
  title: 'A recipe',
  servingAmount: 1,
  servingUnit: 'serving',
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      editTitle,
      editServingUnit,
      editServingAmount,
      publishRecipe,
      openSaveDialog,
      openDiscardChangesDialog,
      openUpdateDialog,
      openDeleteDialog,
    },
    dispatch
  );
}

function mapStateToProps({ recipe }) {
  return { recipe };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditHeader)
);
