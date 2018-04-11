import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  grey,
} from 'material-ui/colors';

import _ from 'lodash';

// function colorParserComposer(modifier
// }

function colorParserComposer(modifier) {
  const colors = {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    grey,
  };

  return colorText => {
    if (colors.hasOwnProperty(colorText)) {
      return colors[colorText][modifier];
    }
    return 'no match';
  };
}

export function textColorParser(colorText, complete) {
  const whiteList = [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'teal',
    'deepOrange',
    'brown',
    'blueGrey',
  ];
  const blackList = [
    'lightBlue',
    'cyan',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'grey',
  ];
  if (complete) {
    if (_.includes(whiteList, colorText)) {
      return '#000000';
    }
    return '#ffffff';
  }
  if (_.includes(whiteList, colorText)) {
    return '#ffffff';
  }
  return '#000000';
}

export function accentTextColorParser(colorText) {
  const whiteList = [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'deepOrange',
  ];
  const blackList = [
    'lightBlue',
    'cyan',
    'teal',
    'gren',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
  ];

  if (_.includes(whiteList, colorText)) {
    return '#ffffff';
  }
  return '#000000';
}

export const rawColorParser = colorText => {
  const colors = {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    grey,
  };
  if (colors.hasOwnProperty(colorText)) {
    return colors[colorText];
  }
  return grey;
};

export const primaryColorParser = colorParserComposer(500);

export const accentColorParser = colorParserComposer('A400');

export const fadedColorParser = colorParserComposer(100);

export const fadedAccentColorParser = colorParserComposer('A100');

export const white = {
  50: '#ffffff',
  100: '#ffffff',
  200: '#ffffff',
  300: '#ffffff',
  400: '#ffffff',
  500: '#ffffff',
  600: '#ffffff',
  700: '#ffffff',
  800: '#ffffff',
  900: '#ffffff',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffffff',
  A700: '#fffff',
  contrastDefaultColor: 'dark',
};

export const black = {
  50: '#000000',
  100: '#000000',
  200: '#000000',
  300: '#000000',
  400: '#000000',
  500: '#000000',
  600: '#000000',
  700: '#000000',
  800: '#000000',
  900: '#000000',
  A100: '#000000',
  A200: '#000000',
  A400: '#000000',
  A700: '#000000',
  contrastDefaultColor: 'dark',
};
