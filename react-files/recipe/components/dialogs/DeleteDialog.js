import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { green, red } from 'material-ui/colors';

import DialogWrapper from './DialogWrapper';
import ErrorWrapper from './ErrorWrapper';
import SuccessWrapper from './SuccessWrapper';
import ProgressSpinner from './ProgressSpinner';
import PasswordInput from '../inputs/PasswordInput';
import {
  closeDeleteDialog,
  deleteRecipe,
  deleteRecipeWithPassword,
} from '../../actions';

const styles = {
  acceptButton: {
    backgroundColor: red[400],
    color: 'white',
    marginBottom: 16,
    '&:hover': {
      backgroundColor: red[600],
    },
  },
  declineButton: {
    backgroundColor: green.A400,
    marginBottom: 16,
    '&:hover': {
      backgroundColor: green.A700,
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 16,
  },
};

class DeleteDialog extends Component {
  deleteRecipe = () => {
    this.props.deleteRecipe(this.props.recipe._id);
  };

  deleteRecipeWithPasswordComposer = () => {
    return password => {
      this.props.deleteRecipeWithPassword(this.props.recipe._id, password);
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
        dialogIsOpen={this.props.deleteDialog.open}
        dialogCloseAction={this.props.closeDeleteDialog}
      >
        {(() => {
          switch (this.props.deleteDialog.status) {
            case 'INITIAL': {
              return (
                <div>
                  <Typography type="headline" align="center">
                    {'Delete Recipe from site?'}
                  </Typography>
                  <Typography type="subheading" align="center">
                    {
                      'Deleting a recipe will be perminent. You will not be able to reverse this.'
                    }
                  </Typography>
                  <div className={buttonsContainer}>
                    <Button
                      raised
                      className={acceptButton}
                      onClick={this.deleteRecipe}
                    >
                      {'Yes, Delete Recipe'}
                    </Button>
                    <Button
                      raised
                      className={declineButton}
                      onClick={this.props.closeDeleteDialog}
                    >
                      {'No, Return to Editing'}
                    </Button>
                  </div>
                </div>
              );
            }
            case 'PROGRESS': {
              return <ProgressSpinner />;
            }
            case 'SUCCESS': {
              return (
                <SuccessWrapper>
                  <Typography align="center" type="headline">
                    {'Recipe Deleted Successfully'}
                  </Typography>
                </SuccessWrapper>
              );
            }
            case 'NEED_PASSWORD': {
              return (
                <div>
                  <Typography>
                    {"Please Enter the Recipe's Password"}
                  </Typography>
                  <PasswordInput
                    submitFunction={this.deleteRecipeWithPasswordComposer()}
                  />
                </div>
              );
            }
            case 'PASSWORD_INCORRECT': {
              return (
                <div>
                  <Typography>
                    {"Please Enter the Recipe's Password"}
                  </Typography>
                  <PasswordInput
                    submitFunction={this.deleteRecipeWithPasswordComposer()}
                    errorMode={true}
                    errorMessage={'Incorrect Password'}
                  />
                </div>
              );
            }
            default: {
              return (
                <ErrorWrapper>
                  <Typography type="headline" align="center">
                    {'There was an error deleting the recipe'}
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

function mapStateToProps({ deleteDialog, recipe }) {
  return { deleteDialog, recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDeleteDialog,
      deleteRecipe,
      deleteRecipeWithPassword,
    },
    dispatch
  );
}

DeleteDialog.propTypes = {};

DeleteDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DeleteDialog)
);
