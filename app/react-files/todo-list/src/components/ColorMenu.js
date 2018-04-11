import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Dot from 'material-ui-icons/Brightness1';

import { primaryColorParser } from '../helpers/colorParser';

const ColorMenu = props => {
  const colors = [
    'red',
    'pink',
    'deepPurple',
    'indigo',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'yellow',
    'orange',
    'deepOrange',
  ];
  return (
    <div>
      {colors.map((color, index) => {
        const breakLine = index % 4 === 3 ? <br /> : '';

        return (
          <span key={`${color}`}>
            <IconButton
              style={{ color: primaryColorParser(color) }}
              onClick={props.clickHandler(color)}
            >
              <Dot />
            </IconButton>
            {breakLine}
          </span>
        );
      })}
    </div>
  );
};

ColorMenu.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ColorMenu;
