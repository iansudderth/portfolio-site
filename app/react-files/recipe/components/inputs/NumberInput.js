import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AutosizeInput from './AutosizeInput';

const styles = {
  root: {
    display: 'inline',
  },
  input: {
    '& input': {
      border: 'none',
      background: 'none',
      textAlign: 'center',
      '&:focus': {
        outline: 'none',
      },
    },
  },
};

function removePrecedingZeros(str) {
  let inputString = str;
  if (typeof inputString !== 'string') {
    inputString = inputString.toString();
  }
  if (inputString.length <= 1) {
    return str;
  }
  const strArray = inputString.split('');
  while (strArray[0] === '0' && strArray[1] !== '.') {
    strArray.shift();
  }
  const output = strArray.join('');
  return output;
}

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.amount.toString(),
      isBeingEdited: false,
    };
  }

  changeHandler = event => {
    const oldVal = this.state.inputValue;
    let newVal = event.target.value;
    newVal = newVal.trim();
    newVal = newVal.length === 0 ? '0' : newVal;
    let inputValue = isNaN(newVal) ? oldVal : newVal;
    inputValue = removePrecedingZeros(inputValue);
    inputValue = inputValue === '' ? '0' : inputValue;
    const updatedScalingFactor = parseFloat(inputValue) / this.props.amount;
    this.setState({ inputValue });
    this.props.updateScalingFactor(updatedScalingFactor);
  };

  resizeStyle = () => {
    const fontSize = { fontSize: this.props.fontSize };
    const fontFamily = { fontFamily: this.props.fontFamily };

    return Object.assign(fontSize, fontFamily);
  };

  generateValue = () => {
    const newVal = this.props.amount * this.props.scalingFactor;
    return _.round(newVal, 2);
  };

  focusHandler = () => {
    const newVal = this.generateValue();
    this.setState({ isBeingEdited: true, inputValue: newVal });
  };

  blurHandler = () => {
    this.props.updateValue(this.state.inputValue);
    const newVal = this.generateValue();
    this.setState({ isBeingEdited: false, inputValue: newVal });
  };

  outputValue = () => {
    if (this.state.isBeingEdited) {
      return this.state.inputValue;
    }
    return this.generateValue();
  };

  inputRef = el => {
    if (el) {
      this.props.inputRef(el.input);
      this.input = el.input;
    }
  };

  keyHandler = event => {
    if (event.which === 13 && this.input) {
      this.input.blur();
    }
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AutosizeInput
          type="text"
          onChange={this.changeHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
          value={this.outputValue()}
          className={classes.input}
          ref={this.inputRef}
          inputStyle={this.resizeStyle()}
          onKeyPress={this.keyHandler}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  classes: PropTypes.object,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scalingFactor: PropTypes.number,
  updateScalingFactor: PropTypes.func,
  updateValue: PropTypes.func,
  inputRef: PropTypes.func,
};

NumberInput.defaultProps = {
  classes: {},
  fontSize: 20,
  fontFamily: 'Roboto',
  amount: null,
  scalingFactor: 1,
  updateScalingFactor: () => null,
  updateValue: () => null,
  inputRef: () => null,
};

export default withStyles(styles)(NumberInput);
