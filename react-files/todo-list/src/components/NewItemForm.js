import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styleSheet = {
  container: {
    margin: 'auto',
    paddingBottom: '16px',
    paddingTop: '16px',
    padding: 24,
    boxSizing: 'border-box',
  },
  typeItem: {
    flexGrow: 1,
  },
};

class NewItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.newItemAction(this.state.newItem);
    this.setState({ newItem: '' });
  };

  inputUpdate = event => {
    this.setState({ newItem: event.target.value });
  };

  render() {
    const { container, typeItem } = this.props.classes;
    return (
      <div className={container}>
        <form onSubmit={this.submitHandler}>
          <Grid container align={'center'}>
            <Grid item className={typeItem}>
              <TextField
                id="newItem"
                label="New Item"
                type="text"
                fullWidth
                value={this.state.newItem}
                onChange={this.inputUpdate}
                InputProps={{
                  style: {
                    color: this.props.textColor,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: this.props.textColor,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                raised
                style={{
                  color: this.props.accentTextColor,
                  backgroundColor: this.props.accentColor,
                }}
              >
                {'Make a New Item'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

NewItemForm.propTypes = {
  newItemAction: PropTypes.func.isRequired,
  accentTextColor: PropTypes.string,
  accentColor: PropTypes.string,
  textColor: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

NewItemForm.defaultProps = {
  accentTextColor: 'black',
  accentColor: 'blue',
  textColor: 'black',
};

export default withStyles(styleSheet)(NewItemForm);
