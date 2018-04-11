import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Settings from 'material-ui-icons/Settings';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditAuthDialog, newRecipeFromCopy } from '../actions';

const styles = {
  menuContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
  },
  buttonWrapper: {
    padding: 8,
  },
  dialogContainer: {
    padding: 16,
  },
  passwordInput: {
    paddingRight: 8,
  },
};

class EditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      anchorEl: null,
      dialogOpen: false,
    };
  }

  handleMenuOpen = event => {
    console.log(event);
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  newRecipeFromCopyDispatcher = () => {
    this.props.newRecipeFromCopy(this.props.recipe);
  };

  render() {
    const {
      menuContainer,
      buttonWrapper,
      passwordInput,
      dialogContainer,
    } = this.props.classes;
    return (
      <div>
        <IconButton onClick={this.handleMenuOpen}>
          <Settings />
        </IconButton>
        <Menu
          open={this.state.menuOpen}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleMenuClose}
        >
          <div className={menuContainer}>
            {this.props.recipeHasPassword ? (
              <div className={buttonWrapper}>
                <Button
                  raised
                  color="primary"
                  onClick={this.props.openEditAuthDialog}
                >
                  {'Edit Recipe'}
                </Button>
              </div>
            ) : (
              ''
            )}
            <div className={buttonWrapper}>
              <Button
                raised
                color="primary"
                onClick={this.newRecipeFromCopyDispatcher}
              >
                {'New Recipe from Copy'}
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

EditMenu.propTypes = {
  recipeHasPassword: PropTypes.bool,
};

EditMenu.defaultProps = {
  recipeHasPassword: false,
};

function mapStateToProps({ recipe }) {
  return { recipe };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { openEditAuthDialog, newRecipeFromCopy },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(EditMenu)
);
