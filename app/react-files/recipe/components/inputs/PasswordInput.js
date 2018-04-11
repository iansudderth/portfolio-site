import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import EnterExitWrapper from '../helpers/EnterExitWrapper';

const styles = {
  fieldContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 16,
  },
  passwordField: {
    flexGrow: 1,
    paddingRight: 16,
  },
  errorContainer: {
    paddingBottom: 12,
  },
  errorText: {
    color: 'red',
  },
  '@media (max-width: 500px)': {
    fieldContainer: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    passwordField: {
      paddingRight: 16,
    },
  },
};

const invalidPassword =
  'Password must be between 4 and 42 characters long and may only use letters, numbers, spaces, underscores, and dashes.';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMode: this.props.errorMode,
      errorMessage: this.props.errorMessage,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.errorMode !== this.state.errorMode ||
      nextProps.errorMessage !== this.state.errorMessage
    ) {
      const errorMessage =
        nextProps.errorMessage === 'INVALID_PASSWORD'
          ? invalidPassword
          : nextProps.errorMessage;

      this.setState({ errorMode: nextProps.errorMode, errorMessage });
    }
  };

  inputRef = el => {
    this.input = el;
  };

  passwordValidator = password => {
    const validator = new RegExp(/^[\w\-\s]{4,42}$/);
    return validator.test(password);
  };

  submitHandler = event => {
    event.preventDefault();
    const password = this.input.value;
    if (this.passwordValidator(password)) {
      this.props.submitFunction(password);
      this.setState({ errorMode: false });
    } else {
      this.setState({ errorMode: true, errorMessage: invalidPassword });
    }
  };

  render() {
    const {
      fieldContainer,
      passwordField,
      errorContainer,
      errorText,
    } = this.props.classes;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className={fieldContainer}>
            <TextField
              error={this.state.errorMode}
              id="password"
              label="Password"
              type="password"
              margin="normal"
              className={passwordField}
              inputRef={this.inputRef}
              autoFocus={this.props.autoFocus}
            />
            <Button color="primary" raised onClick={this.submitHandler}>
              {this.props.buttonText}
            </Button>
          </div>
        </form>
        <div className={errorContainer}>
          <EnterExitWrapper enterSpring={false}>
            {this.state.errorMode ? (
              <Typography className={errorText} align="center">
                {this.state.errorMessage}
              </Typography>
            ) : null}
          </EnterExitWrapper>
        </div>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  errorMode: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitFunction: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  autoFocus: PropTypes.bool,
};

PasswordInput.defaultProps = {
  errorMode: false,
  errorMessage: null,
  buttonText: 'Save and Publish',
  autoFocus: false,
};

export default withStyles(styles)(PasswordInput);
