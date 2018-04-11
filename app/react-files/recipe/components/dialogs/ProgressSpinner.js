import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
  spinnerContainer: {
    textAlign: 'center',
    padding: 16,
    width: '100%',
  },
};

function ProgressSpinner(props) {
  const { spinnerContainer } = props.classes;
  return (
    <div className={spinnerContainer}>
      <CircularProgress color={'primary'} size={50} />
    </div>
  );
}

ProgressSpinner.propTypes = {};

ProgressSpinner.defaultProps = {};

export default withStyles(styles)(ProgressSpinner);
