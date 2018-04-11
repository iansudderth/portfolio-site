import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui-icons/DeleteForever';
import TextAreaInput from '../inputs/TextAreaInput';

import ExpandWrapper from '../helpers/ExpandWrapper';

const style = {
  container: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingBottom: 12,
  },
  listNumber: {
    fontSize: 20,
    paddingRight: 10,
  },
};

function EditStep(props) {
  function updateStepValue(newText) {
    props.editStep(props.sectionIndex, props.stepIndex, newText);
  }

  function deleteStep() {
    props.deleteStep(props.stepIndex);
  }

  const { container, listItem, listNumber } = props.classes;
  return (
    <div>
      <li className={listItem}>
        <div className={listNumber}>
          {`${props.stepIndex + props.startStepAt}.`}
        </div>
        <div className={container}>
          <TextAreaInput
            value={props.stepText}
            fontSize={20}
            fontWeight={400}
            updateValue={updateStepValue}
          />
          <IconButton style={{ color: 'red' }} onClick={deleteStep}>
            <DeleteForever />
          </IconButton>
        </div>
      </li>
    </div>
  );
}

EditStep.propTypes = {};

export default withStyles(style)(EditStep);
