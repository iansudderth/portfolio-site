import React from 'react';
import PropTypes from 'prop-types';
import { VelocityTransitionGroup } from 'velocity-react';

function EnterExitWrapper(props) {
  const {
    stiffness,
    damping,
    enterAnimation,
    display,
    exitAnimation,
    enterDuration,
    exitDuration,
    runOnMount,
    parentClass,
    parentComponent,
    parentProps,
  } = props;

  const enterAnimationProperties = props.enterSpring
    ? {
        easing: [stiffness, damping],
      }
    : {
        duration: enterDuration,
      };

  const exitAnimationProperties = props.exitSpring
    ? {
        easing: [stiffness, damping],
      }
    : {
        duration: exitDuration,
      };

  return (
    <VelocityTransitionGroup
      enter={{
        animation: enterAnimation,
        display,
        delay: props.enterDelay,
        ...enterAnimationProperties,
      }}
      leave={{
        animation: exitAnimation,
        delay: props.exitDelay,
        ...exitAnimationProperties,
      }}
      runOnMount={runOnMount}
      className={parentClass}
      component={parentComponent}
      {...parentProps}
    >
      {props.children}
    </VelocityTransitionGroup>
  );
}

EnterExitWrapper.propTypes = {
  display: PropTypes.string,
  enterAnimation: PropTypes.string,
  exitAnimation: PropTypes.string,
  enterSpring: PropTypes.bool,
  exitSpring: PropTypes.bool,
  stiffness: PropTypes.number,
  damping: PropTypes.number,
  enterDuration: PropTypes.number,
  exitDuration: PropTypes.number,
  parentClass: PropTypes.string,
  runOnMount: PropTypes.bool,
  parentComponent: PropTypes.string,
  parentProps: PropTypes.object,
  enterDelay: PropTypes.number,
  exitDelay: PropTypes.number,
};

EnterExitWrapper.defaultProps = {
  display: 'block',
  enterAnimation: 'slideDown',
  exitAnimation: 'slideUp',
  enterSpring: true,
  exitSpring: false,
  stiffness: 200,
  damping: 30,
  enterDuration: 250,
  exitDuration: 250,
  parentClass: '',
  runOnMount: true,
  parentComponent: 'div',
  parentProps: {},
  enterDelay: 0,
  exitDelay: 0,
};

export default EnterExitWrapper;
