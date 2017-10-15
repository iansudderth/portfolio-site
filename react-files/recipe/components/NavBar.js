import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { requestUpdateRecipeList, newRecipe, reset } from '../actions';
import ChangeRecipeDialog from './ChangeRecipeDialog';

const styles = {
  navBar: {
    backgroundColor: red[500],
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navText: {
    color: 'white',
    cursor: 'pointer',
  },
  changeRecipeButton: {
    color: 'white',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
    };
  }

  openRecipeDialog = () => {
    this.props.requestUpdateRecipeList();
    this.setState({ dialogOpen: true });
  };

  closeRecipeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  resetApp = () => {
    this.props.reset();
  };

  render() {
    const {
      navBar,
      navText,
      toolBar,
      changeRecipeButton,
      buttonsContainer,
    } = this.props.classes;
    return (
      <AppBar position={'static'} className={navBar}>
        <Toolbar className={toolBar}>
          <Typography
            type={'title'}
            className={navText}
            onClick={this.resetApp}
          >
            {'Parametric Recipes'}
          </Typography>
          <div className={buttonsContainer}>
            <Button
              className={changeRecipeButton}
              onClick={this.props.newRecipe}
            >
              {'New Recipe'}
            </Button>
            <Button
              className={changeRecipeButton}
              onClick={this.openRecipeDialog}
            >
              {'Change Recipe'}
            </Button>
          </div>
        </Toolbar>
        <ChangeRecipeDialog
          open={this.state.dialogOpen}
          handleClose={this.closeRecipeDialog}
        />
      </AppBar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { requestUpdateRecipeList, newRecipe, reset },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavBar));
