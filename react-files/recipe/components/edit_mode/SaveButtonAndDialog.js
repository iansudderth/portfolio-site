import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

const styles = {
  dialogContainer: {
    padding: 16,
    textAlign: 'center',
  },
  noPassContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
  passwordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 16,
  },
  passwordField: {
    flexGrow: 1,
    paddingRight: 16,
  },
};

class SaveButtonAndDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  closeDialog = () => {
    this.setState({ open: false });
  };

  openDialog = () => {
    this.setState({ open: true });
  };

  saveClickHandler = () => {
    this.openDialog();
  };

  inputRef = el => {
    this.passwordInput = el;
  };

  publishWithPassword = event => {
    event.preventDefault();
    this.props.publishRecipe(this.passwordInput.value);
  };

  publishWithoutPassword = () => {
    this.props.publishRecipe(false);
  };

  render() {
    const {
      dialogContainer,
      noPassContainer,
      passwordContainer,
      passwordField,
    } = this.props.classes;
    return (
      <div>
        {this.props.recipe.password === true}
        <Button color="primary" raised onClick={this.saveClickHandler}>
          Save & Publish
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.closeDialog}>
          <div className={dialogContainer}>
            <DialogTitle>{'Create Password to Enable Editing?'}</DialogTitle>
            <Typography>
              {
                "If you want to edit the recipe later, you'll need to set a password "
              }
            </Typography>
            <form onSubmit={this.publishWithPassword}>
              <div className={passwordContainer}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  className={passwordField}
                  inputRef={this.inputRef}
                />
                <Button
                  color="primary"
                  raised
                  onClick={this.publishWithPassword}
                >
                  {'Save and Publish'}
                </Button>
              </div>
            </form>
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
                onClick={this.publishWithoutPassword}
              >
                {'Publish without Password'}
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

SaveButtonAndDialog.propTypes = {};

SaveButtonAndDialog.defaultProps = {};

export default withStyles(styles)(SaveButtonAndDialog);
