import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Error from 'material-ui-icons/Error';
import { red } from 'material-ui/colors';

const styles = {
  iconContainer: {
    width: '100%',
    textAlign: 'center',
    color: red['A400'],
  },
  errorIcon: {
    height: 48,
    width: 48,
  },
  contentContainer: {
    paddingBottom: 18,
  },
};

function ErrorWrapper(props) {
  const { iconContainer, contentContainer, errorIcon } = props.classes;
  return (
    <div>
      <div className={iconContainer}>
        <Error className={errorIcon} />
      </div>
      <div className={contentContainer}>{props.children}</div>
    </div>
  );
}

ErrorWrapper.propTypes = {};

ErrorWrapper.defaultProps = {};

export default withStyles(styles)(ErrorWrapper);
