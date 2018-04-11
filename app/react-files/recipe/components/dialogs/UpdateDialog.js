import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { red, green } from 'material-ui/colors';

import DialogWrapper from './DialogWrapper';
import SuccessWrapper from './SuccessWrapper';
import ErrorWrapper from './ErrorWrapper';
import PasswordInput from '../inputs/PasswordInput';
import ProgressSpinner from './ProgressSpinner';
import {
  closeUpdateDialog,
  updateRecipe,
  updateRecipeWithPassword,
} from '../../actions';

const styles = {
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  acceptButton: {
    backgroundColor: green.A400,
    marginBottom: 16,
    '&:hover': {
      backgroundColor: green.A700,
    },
  },
  declineButton: {
    backgroundColor: red[400],
    color: 'white',
    marginBottom: 16,
    '&:hover': {
      backgroundColor: red[600],
    },
  },
};

class UpdateDialog extends Component {
  updateRecipe = () => {
    this.props.updateRecipe(this.props.recipe._id, this.props.recipe);
  };

  updateRecipeWithPasswordComposer = () => {
    return password => {
      this.props.updateRecipeWithPassword(
        this.props.recipe._id,
        this.props.recipe,
        password
      );
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
        dialogIsOpen={this.props.updateDialog.open}
        dialogCloseAction={this.props.closeUpdateDialog}
      >
        {(() => {
          switch (this.props.updateDialog.status) {
            case 'INITIAL': {
              return (
                <div>
                  <Typography type="headline" align="center">
                    {'Save changes and update recipe?'}
                  </Typography>
                  <div className={buttonsContainer}>
                    <Button
                      raised
                      className={acceptButton}
                      onClick={this.updateRecipe}
                    >
                      {'Yes, Save Changes'}
                    </Button>
                    <Button
                      raised
                      className={declineButton}
                      onClick={this.props.closeUpdateDialog}
                    >
                      {'No, Return to Editing'}
                    </Button>
                  </div>
                </div>
              );
            }
            case 'PASSWORD_PROGRESS':
            case 'PROGRESS': {
              return <ProgressSpinner />;
            }
            case 'SUCCESS': {
              return (
                <SuccessWrapper>
                  <Typography type="headline" align="center">
                    {'Recipe Updated Successfully'}
                  </Typography>
                </SuccessWrapper>
              );
            }
            case 'NEED_PASSWORD': {
              return (
                <div>
                  <Typography align="center" type="headline">
                    {'Please enter recipe password'}
                  </Typography>
                  <PasswordInput
                    submitFunction={this.updateRecipeWithPasswordComposer}
                  />
                </div>
              );
            }
            case 'INCORRECT_PASSWORD': {
              return (
                <ErrorWrapper>
                  <div>
                    <Typography align="center" type="headline">
                      {'Please enter recipe password'}
                    </Typography>
                    <PasswordInput
                      submitFunction={this.updateRecipeWithPasswordComposer}
                      errorMode={true}
                      errorMessage={'Incorrect Password'}
                    />
                  </div>
                </ErrorWrapper>
              );
            }
            case 'ERROR':
            default: {
              return (
                <ErrorWrapper>
                  <Typography type="headline" align="center">
                    {'There was an error while updating the recipe'}
                  </Typography>
                </ErrorWrapper>
              );
            }
          }
        })()}
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ updateDialog, recipe }) {
  return {
    updateDialog,
    recipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { closeUpdateDialog, updateRecipe, updateRecipeWithPassword },
    dispatch
  );
}

UpdateDialog.propTypes = {};

UpdateDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(UpdateDialog)
);
