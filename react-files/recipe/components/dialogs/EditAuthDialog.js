import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogWrapper from './DialogWrapper';
import ErrorWrapper from './ErrorWrapper';
import SuccessWrapper from './SuccessWrapper';
import PasswordInput from '../inputs/PasswordInput';
import ProgressSpinner from './ProgressSpinner';
import { closeEditAuthDialog, editAuth } from '../../actions';

const styles = {};

class EditAuthDialog extends Component {
  authorizeEditConstructor = () => {
    return password => {
      this.props.editAuth(this.props.recipe._id, password);
    };
  };

  render() {
    return (
      <DialogWrapper
        dialogCloseAction={this.props.closeEditAuthDialog}
        dialogIsOpen={this.props.editAuthDialog.open}
      >
        <div>
          {(() => {
            switch (this.props.editAuthDialog.status) {
              case 'INITIAL': {
                return (
                  <div>
                    <Typography type="headline" align="center">
                      {'Enter Recipe Password'}
                    </Typography>
                    <PasswordInput
                      submitFunction={this.authorizeEditConstructor()}
                      buttonText="Submit"
                    />
                  </div>
                );
              }
              case 'PROGRESS': {
                return <ProgressSpinner />;
              }
              case 'SUCCESS': {
                return (
                  <SuccessWrapper>
                    <Typography type="headline" align="center">
                      {'Success'}
                    </Typography>
                  </SuccessWrapper>
                );
              }
              case 'INCORRECT_PASSWORD': {
                return (
                  <div>
                    <ErrorWrapper>
                      <Typography type="headline" align="center">
                        {'Enter Recipe Password'}
                      </Typography>
                      <PasswordInput
                        submitFunction={this.authorizeEditConstructor()}
                        buttonText="Submit"
                        errorMode={true}
                        errorMessage={'Incorrect password'}
                      />
                    </ErrorWrapper>
                  </div>
                );
              }
              case 'ERROR':
              default: {
                return (
                  <ErrorWrapper>
                    <Typography type="headline" align="center">
                      {'There was an error.'}
                    </Typography>
                  </ErrorWrapper>
                );
              }
            }
          })()}
        </div>
      </DialogWrapper>
    );
  }
}

function mapStateToProps({ editAuthDialog, recipe }) {
  return {
    editAuthDialog,
    recipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeEditAuthDialog,
      editAuth,
    },
    dispatch
  );
}

EditAuthDialog.propTypes = {};

EditAuthDialog.defaultProps = {};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(EditAuthDialog)
);
