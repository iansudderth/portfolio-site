import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CheckCircle from 'material-ui-icons/CheckCircle';
import { green } from 'material-ui/colors';

const styles = {
  iconContainer: {
    width: '100%',
    textAlign: 'center',
    color: green['A400'],
  },
  checkIcon: {
    height: 48,
    width: 48,
  },
  contentContainer: {},
};

function SuccessWrapper(props) {
  const { iconContainer, contentContainer, checkIcon } = props.classes;
  return (
    <div>
      <div className={iconContainer}>
        <CheckCircle className={checkIcon} />
      </div>
      <div className={contentContainer}>{props.children}</div>
    </div>
  );
}

SuccessWrapper.propTypes = {};

SuccessWrapper.defaultProps = {};

export default withStyles(styles)(SuccessWrapper);
