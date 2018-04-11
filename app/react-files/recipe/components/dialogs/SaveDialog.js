import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import { DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { closeSaveDialog, saveNewRecipe } from '../../actions';

import DialogWrapper from './DialogWrapper';
import ProgressSpinner from './ProgressSpinner';
import SuccessWrapper from './SuccessWrapper';
import PasswordInput from '../inputs/PasswordInput';
import ErrorWrapper from './ErrorWrapper';

const styles = {
  dialogContainer: {
    paddingBottom: 16,
    textAlign: 'center',
  },
  noPassContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
};

class SaveDialog extends Component {
  saveRecipeWithPasswordConstructor = () => {
    return password => {
      this.props.saveNewRecipe(this.props.recipe, password);
    };
  };
  saveRecipeWithNoPassword = () => {
    this.props.saveNewRecipe(this.props.recipe, null);
  };

  innerContent = () => {
    const {
      dialogContainer,
      passwordContainer,
      passwordField,
      noPassContainer,
    } = this.props.classes;
    return (
      <div className={dialogContainer}>
        <DialogTitle>{'Create Password to Enable Editing?'}</DialogTitle>
        <Typography>
          {
            "If you want to edit the recipe later, you'll need to set a password "
          }
        </Typography>
        <PasswordInput
          submitFunction={this.saveRecipeWithPasswordConstructor()}
        />
        <Divider />
        <div className={noPassContainer}>
          <Typography>
            {
              'You can still publish a recipe without setting a password, however you will not be able to edit it later if you need to make corrections or updates'
            }
          </Typography>
          <br />
          <Button
            raised
            color="primary"
            onClick={this.saveRecipeWithNoPassword}
          >
            {'Publish without Password'}
          </Button>
        </div>
      </div>
    );
  };
  render() {
    const {
      dialogContainer,
      passwordContainer,
      passwordField,
      noPassContainer,
    } = this.props.classes;

    return (
      <DialogWrapper
        dialogCloseAction={this.props.closeSaveDialog}
        dialogIsOpen={this.props.saveDialog.open}
      >
        {(() => {
          switch (this.props.saveDialog.status) {
            case 'PROGRESS': {
              return <ProgressSpinner />;
            }
            case 'SUCCESS': {
              return (
                <SuccessWrapper>
                  <Typography align="center" type="headline">
                    {'Recipe Saved Successfully'}
                  </Typography>
                </SuccessWrapper>
              );
            }
            case 'ERROR': {
              return (
                <ErrorWrapper>
                  <Typography type="headline" align="center">
                    {'There was an error saving your recipe.'}
                  </Typography>
                </ErrorWrapper>
              );
            }
            case 'INITIAL':
            default: {
              return this.innerContent();
            }
          }
        })()}
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ saveDialog, recipe }) {
  return { saveDialog, recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeSaveDialog, saveNewRecipe }, dispatch);
}

SaveDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  saveDialog: PropTypes.shape({
    open: PropTypes.Bool,
    status: PropTypes.string,
  }).isRequired,
  closeSaveDialog: PropTypes.func.isRequired,
  saveNewRecipe: PropTypes.func.isRequired,
};

SaveDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SaveDialog)
);
