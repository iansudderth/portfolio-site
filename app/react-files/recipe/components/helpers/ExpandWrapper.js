import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';

class ExpandWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount = () => {
    this.updateHeight();
  };

  componentDidUpdate = () => {
    this.updateHeight();
  };

  innerDivRef = el => {
    this.innerDiv = el;
  };

  updateHeight = () => {
    const newHeight =
      this.innerDiv.clientHeight + this.props.paddingCompensation;
    if (newHeight !== this.state.height) {
      this.setState({ height: newHeight });
    }
  };

  render() {
    const {
      spring,
      stiffness,
      damping,
      duration,
      outerClass,
      innerClass,
      innerProps,
      outerProps,
    } = this.props;

    const configProps = spring
      ? {
          easing: [stiffness, damping],
        }
      : {
          duration,
        };

    return (
      <VelocityComponent
        animation={{
          minHeight: `${this.state.height}px`,
        }}
        {...configProps}
      >
        <div className={outerClass} {...outerProps}>
          <div ref={this.innerDivRef} className={innerClass} {...innerProps}>
            {this.props.children}
          </div>
        </div>
      </VelocityComponent>
    );
  }
}

ExpandWrapper.propTypes = {
  paddingCompensation: PropTypes.number,
  spring: PropTypes.bool,
  stiffness: PropTypes.number,
  damping: PropTypes.number,
  duration: PropTypes.number,
  outerClass: PropTypes.string,
  innerClass: PropTypes.string,
  outerProps: PropTypes.object,
  innerProps: PropTypes.object,
};

ExpandWrapper.defaultProps = {
  paddingCompensation: 0,
  spring: true,
  stiffness: 200,
  damping: 30,
  duration: 250,
  outerClass: '',
  innerClass: '',
  outerProps: {},
  innerProps: {},
};

export default ExpandWrapper;
