import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui-icons/Clear';

import ExpandWrapper from '../helpers/ExpandWrapper';

const style = {
  dialogRoot: {},
  paperOverride: {
    maxWidth: 600,
    width: '100%',
  },
  dialogContainer: {
    padding: 12,
    boxSizing: 'border-box',
    paddingBottom: 24,
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  contentContainer: {},
  innerWrapper: {},
  outerWrapper: {},
};

function DialogWrapper(props) {
  const {
    dialogContainer,
    closeContainer,
    contentContainer,
    innerWrapper,
    outerWrapper,
    dialogRoot,
    paperOverride,
  } = props.classes;
  return (
    <Dialog
      open={props.dialogIsOpen}
      onRequestClose={props.dialogCloseAction}
      className={dialogRoot}
      classes={{
        paperWidthSm: paperOverride,
      }}
    >
      <div className={dialogContainer}>
        <div className={closeContainer}>
          <IconButton onClick={props.dialogCloseAction}>
            <Clear />
          </IconButton>
        </div>
        <ExpandWrapper
          innerClass={innerWrapper}
          outerClass={outerWrapper}
          tension={200}
          damping={30}
        >
          <div className={contentContainer}>{props.children}</div>
        </ExpandWrapper>
      </div>
    </Dialog>
  );
}

DialogWrapper.propTypes = {
  dialogIsOpen: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  dialogCloseAction: PropTypes.func.isRequired,
};

DialogWrapper.defaultProps = {
  dialogIsOpen: false,
};

export default withStyles(style)(DialogWrapper);
