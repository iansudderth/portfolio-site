import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { green, red } from 'material-ui/colors';

import DialogWrapper from './DialogWrapper';
import { closeDiscardChangesDialog, discardChanges } from '../../actions';

const styles = {
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  declineButton: {
    backgroundColor: green.A400,
    marginBottom: 16,
    '&:hover': {
      backgroundColor: green.A700,
    },
  },
  acceptButton: {
    backgroundColor: red[400],
    color: 'white',
    marginBottom: 16,
    '&:hover': {
      backgroundColor: red[600],
    },
  },
};

class DiscardChangesDialog extends Component {
  discardChangesComposer = () => {
    return () => {
      this.props.discardChanges(this.props.recipe._id);
    };
  };

  render() {
    const {
      buttonsContainer,
      acceptButton,
      declineButton,
    } = this.props.classes;
    return (
      <DialogWrapper
        dialogIsOpen={this.props.discardChangesDialog.open}
        dialogCloseAction={this.props.closeDiscardChangesDialog}
      >
        <Typography type="headline" align="center">
          {'Discard changes without saving?'}
        </Typography>
        <div className={buttonsContainer}>
          <Button
            raised
            className={acceptButton}
            onClick={this.discardChangesComposer()}
          >
            {'Yes, Discard Changes'}
          </Button>
          <Button
            raised
            className={declineButton}
            onClick={this.props.closeDiscardChangesDialog}
          >
            {'No, Return to Editing'}
          </Button>
        </div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ discardChangesDialog, recipe }) {
  return { discardChangesDialog, recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDiscardChangesDialog,
      discardChanges,
    },
    dispatch
  );
}

DiscardChangesDialog.propTypes = {};

DiscardChangesDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DiscardChangesDialog)
);
