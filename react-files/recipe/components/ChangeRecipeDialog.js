import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { lightBlue } from 'material-ui/colors';
import {
  changeRecipe,
  requestRecipe,
  requestUpdateRecipeList,
} from '../actions';

import ExpandWrapper from './helpers/ExpandWrapper';

const styles = {
  listItem: {
    transition: '.5s',
    cursor: 'pointer',
    '&:hover': {
      color: lightBlue[600],
    },
  },
  listText: {
    '& h3': {
      color: 'inherit',
    },
    textAlign: 'center',
  },
  innerDialog: {
    padding: 16,
  },
  buttonsContainer: {
    padding: 12,
    display: 'flex',
    justifyContent: 'space-between',
  },
  listTitle: {
    textAlign: 'center',
  },
};

class ChangeRecipeDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'current',
    };
  }

  componentWillReceiveProps = () => {
    this.setState({ page: 'current' });
  };

  changeRecipeComposer = id => {
    return () => {
      this.props.requestRecipe(id);
      this.props.handleClose();
    };
  };

  handleNext = () => {
    this.setState({ page: 'next' }, () => {
      this.requestUpdatedPage();
    });
  };

  handlePrev = () => {
    this.setState({ page: 'prev' }, () => {
      this.requestUpdatedPage();
    });
  };

  requestUpdatedPage = () => {
    const index = parseInt(this.props.recipeList.index, 10);
    if (this.state.page === 'next') {
      this.props.requestUpdateRecipeList(index + 1);
    } else {
      this.props.requestUpdateRecipeList(index - 1);
    }
  };

  render() {
    const {
      listItem,
      listText,
      innerDialog,
      buttonsContainer,
      listTitle,
    } = this.props.classes;
    const prevDisabled = this.props.recipeList.prev
      ? { disabled: false }
      : { disabled: true };
    const nextDisabled = this.props.recipeList.next
      ? { disabled: false }
      : { disabled: true };
    return (
      <Dialog open={this.props.open} onRequestClose={this.props.handleClose}>
        <div className={innerDialog}>
          <DialogTitle className={listTitle}>Choose a Recipe </DialogTitle>
          <div>
            <List>
              <ExpandWrapper>
                {this.props.recipeList[this.state.page].map(recipe => (
                  <ListItem
                    key={recipe._id}
                    className={listItem}
                    onClick={this.changeRecipeComposer(recipe._id)}
                  >
                    <ListItemText className={listText} primary={recipe.title} />
                  </ListItem>
                ))}
              </ExpandWrapper>
            </List>
            <div className={buttonsContainer}>
              <Button
                color="primary"
                {...prevDisabled}
                onClick={this.handlePrev}
              >
                {'Previous'}
              </Button>
              <Button
                color="primary"
                {...nextDisabled}
                onClick={this.handleNext}
              >
                {'Next'}
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

ChangeRecipeDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

ChangeRecipeDialog.defaultProps = {
  open: false,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeRecipe,
      requestRecipe,
      requestUpdateRecipeList,
    },
    dispatch,
  );
}

function mapStateToProps({ recipeList }) {
  return { recipeList };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(ChangeRecipeDialog),
);
