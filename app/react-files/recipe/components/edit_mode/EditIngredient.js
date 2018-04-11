import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui-icons/DeleteForever';
import TextAreaInput from '../inputs/TextAreaInput';
import NumberInput from '../inputs/NumberInput';
import SmallTextInput from '../inputs/SmallTextInput';

const styles = {
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    borderBottom: '2px solid #F0F0F0',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  amountContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  nameContainer: {
    flexGrow: 1,
    display: 'flex',
  },
  unitContainer: {
    display: 'inline-flex',
  },
  numberContainer: {
    display: 'flex',
    flexGrow: 1,
  },
  controlsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  deleteContainer: {
    marginLeft: 8,
  },
};

function EditIngredient(props) {
  function deleteIngredientDispatch() {
    props.deleteIngredient(props.sectionIndex, props.ingredientIndex);
  }

  function editIngredientNameDispatch(newName) {
    props.editIngredientName(
      props.sectionIndex,
      props.ingredientIndex,
      newName
    );
  }

  function editIngredientAmountDispatch(newAmount) {
    props.editIngredientAmount(
      props.sectionIndex,
      props.ingredientIndex,
      newAmount
    );
  }

  function editIngredientUnitDispatch(newUnit) {
    props.editIngredientUnit(
      props.sectionIndex,
      props.ingredientIndex,
      newUnit
    );
  }

  const {
    container,
    amountContainer,
    nameContainer,
    unitContainer,
    numberContainer,
    controlsContainer,
    deleteContainer,
  } = props.classes;
  return (
    <div>
      <div className={controlsContainer}>
        <div className={container}>
          <div className={nameContainer}>
            <TextAreaInput
              value={props.ingredientName}
              fontWeight={400}
              updateValue={editIngredientNameDispatch}
            />
          </div>
          <div className={amountContainer}>
            <div className={numberContainer}>
              <NumberInput
                amount={props.ingredientAmount}
                updateValue={editIngredientAmountDispatch}
              />
            </div>
            <div className={unitContainer}>
              <SmallTextInput
                value={props.ingredientUnit}
                fontWeight={400}
                updateValue={editIngredientUnitDispatch}
              />
            </div>
          </div>
        </div>
        <div className={deleteContainer}>
          <IconButton
            style={{ color: 'red' }}
            onClick={deleteIngredientDispatch}
          >
            <DeleteForever />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

EditIngredient.propTypes = {
  index: PropTypes.number,
};

export default withStyles(styles)(EditIngredient);
