import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createStyleSheet,
  MuiThemeProvider
} from "material-ui/styles";

const styleSheet = createStyleSheet("App", theme => ({
  "@global": {
    html: {
      background: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      WebkitFontSmoothing: "antialiased", // Antialiasing.
      MozOsxFontSmoothing: "grayscale" // Antialiasing.
    },
    body: {
      margin: 0
    },
    a: {
      color: "inherit"
    }
  }
}));

let AppWrapper = props =>
  <div>
    {props.children}
  </div>;

AppWrapper = withStyles(styleSheet)(AppWrapper);

class App extends Component {
  componentDidMount() {

  render() {
    const { styleManager, theme } = getDefaultContext();
    return (
      <MuiThemeProvider styleManager={styleManager} theme={theme}>
        <AppWrapper>
          {this.props.children}
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
