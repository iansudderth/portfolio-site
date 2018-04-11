import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import NumberInput from './inputs/NumberInput';
import { changeScalingFactor } from '../actions';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingLeft: 12,
  },
  unit: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },
};

class AmountInput extends Component {
  constructor(props) {
    super(props);
  }

  updateScalingFactor = newScalingFactor => {
    this.props.changeScalingFactor(newScalingFactor);
  };

  unitStyle = () => {
    const fontSize = this.props.fontSize
      ? { fontSize: this.props.fontSize }
      : {};
    const fontFamily = this.props.fontFamily
      ? { fontFamily: this.props.fontFamily }
      : {};

    return Object.assign(fontSize, fontFamily);
  };

  inputRef = el => {
    this.input = el;
  };

  focusInput = () => {
    if (this.input) {
      const length = this.input.value.length;
      this.input.focus();
      this.input.setSelectionRange(length, length);
    }
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        {this.props.amount === 0 ? (
          ''
        ) : (
          <NumberInput
            amount={this.props.amount}
            unit={this.props.unit}
            scalingFactor={this.props.scalingFactor}
            updateScalingFactor={this.updateScalingFactor}
            fontSize={this.props.fontSize}
            inputRef={this.inputRef}
          />
        )}
        <div
          className={classes.unit}
          style={this.unitStyle()}
          onClick={this.focusInput}
          role={'none'}
        >
          {this.props.unit}
        </div>
      </div>
    );
  }
}

AmountInput.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string,
  scalingFactor: PropTypes.number,
  changeScalingFactor: PropTypes.func,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
};

AmountInput.defaultProps = {
  amount: 0,
  unit: 'g',
  scalingFactor: 1,
  fontSize: 20,
  fontFamily: '',
  changeScalingFactor: x => null,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeScalingFactor,
    },
    dispatch,
  );
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(AmountInput),
);
