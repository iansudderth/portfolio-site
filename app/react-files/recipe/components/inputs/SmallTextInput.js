import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AutosizeInput from '../inputs/AutosizeInput';

const styles = {
  root: {
    display: 'inline-flex',
    fontFamily: 'Roboto',
    alignItems: 'baseline',
    '& input': {
      border: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },
};
class SmallTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ inputValue: nextProps.value });
  }

  changeHandler = event => {
    const oldVal = this.state.inputValue;
    const newVal = event.target.value;
    let value = newVal;
    if (
      this.props.characterCap !== 0 &&
      value.length >= this.props.characterCap
    ) {
      value = oldVal;
    }

    this.setState({ inputValue: value });
  };

  blurHandler = () => {
    let value = this.state.inputValue;
    value = value.replace(/&nbsp;/g, ' ');
    value = value.trim();
    value = value.replace(/\n\r\t/g, '');
    if (this.props.characterCap !== 0) {
      if (value.length >= this.props.characterCap) {
        value = value.slice(0, this.props.characterCap);
      }
    }
    this.props.updateValue(value);
    this.setState({ inputValue: value });
  };

  keyHandler = event => {
    if (event.which === 13) {
      this.input.input.blur();
    }
  };

  inputRef = el => {
    this.input = el;
  };

  inputStyles = () => {
    const fontSize = { fontSize: this.props.fontSize };
    const fontFamily = { fontFamily: this.props.fontFamily };
    const leftSpacing = { marginLeft: this.props.leftSpacing };

    return Object.assign(fontSize, fontFamily, leftSpacing);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AutosizeInput
          className={classes.input}
          value={this.state.inputValue}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          onKeyPress={this.keyHandler}
          ref={this.inputRef}
          inputStyle={this.inputStyles()}
        />
      </div>
    );
  }
}

SmallTextInput.propTypes = {
  classes: PropTypes.object,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scalingFactor: PropTypes.number,
  updateScalingFactor: PropTypes.func,
  updateValue: PropTypes.func,
  inputRef: PropTypes.func,
  characterCap: PropTypes.number,
  leftSpacing: PropTypes.number,
  value: PropTypes.string,
};

SmallTextInput.defaultProps = {
  classes: {},
  value: 'g',
  fontSize: 20,
  fontFamily: 'Roboto',
  leftSpacing: 0,
  amount: '',
  scalingFactor: 1,
  characterCap: 20,
  updateScalingFactor: x => null,
  updateValue: x => null,
  inputRef: x => null,
};

export default withStyles(styles)(SmallTextInput);
