import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
// import _ from 'lodash'
import { withStyles } from 'material-ui/styles';
import List from '../components/List';
import {
  newItem,
  changeBaseItem,
  completeItem,
  deleteItem,
  reorderItem,
  changeColor,
  updateItem,
  updateDataThrottled,
} from '../actions';
// import style from "../components/ListItem/style.css";
import ListHeader from '../components/ListHeader';

const styleSheet = {
  card: {
    margin: 0,
  },
  '@media (min-width:768px)': {
    card: {
      margin: 16,
    },
  },
};

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
    };
  }

  componentDidUpdate = () => {
    this.updateDataDispatch();
  };

  inputUpdate = event => {
    this.setState({ newItem: event.target.value });
  };

  newItemAction = content => {
    this.props.newItem(content, this.props.baseItem);
    this.setState({ newItem: '' }, () => {});
  };

  changeBaseComposer = id => {
    const changeBaseItemDispatch = this.props.changeBaseItem;
    return () => {
      changeBaseItemDispatch(id);
    };
  };

  deleteItemComposer = id => {
    const deleteItemDispatch = this.props.deleteItem;
    return () => {
      deleteItemDispatch(id);
    };
  };

  completeItemComposer = id => {
    const completeItemDispatch = this.props.completeItem;
    return () => {
      completeItemDispatch(id);
    };
  };

  reorderItemComposer = (id, oldIndex, newIndex) => {
    const reorderItemDispatch = this.props.reorderItem;
    return () => {
      reorderItemDispatch(id, oldIndex, newIndex);
    };
  };

  generateComplete = () => {
    const completeCount = this.props.items[this.props.baseItem].completeChildren
      .length;
    const totalCount =
      this.props.items[this.props.baseItem].incompleteChildren.length +
      completeCount;
    return `( ${completeCount} / ${totalCount} Complete )`;
  };

  changeColorComposer = (id, color) => {
    const changeColorDispatch = this.props.changeColor;
    return () => {
      changeColorDispatch(id, color);
    };
  };

  updateItemDispatch = (id, newText) => {
    this.props.updateItem(id, newText);
  };

  updateDataDispatch = () => {
    const id = this.props.listID;
    const newState = {
      items: this.props.items,
      baseItem: this.props.baseItem,
    };
    this.props.updateData(id, { id, newState });
  };

  render() {
    const { card } = this.props.classes;
    const currentItem = this.props.items[this.props.baseItem];
    return (
      <Card className={card}>
        <ListHeader
          baseItem={this.props.baseItem}
          baseItemText={currentItem.content}
          currentParent={currentItem.parent}
          changeBaseComposer={this.changeBaseComposer}
          changeColorComposer={this.changeColorComposer}
          counterText={this.generateComplete()}
          items={this.props.items}
          newItemAction={this.newItemAction}
          updateItem={this.updateItemDispatch}
          updateData={this.updateDataDispatch}
          completeItemComposer={this.completeItemComposer}
        />
        <List
          items={this.props.items}
          baseItem={this.props.baseItem}
          changeBaseComposer={this.changeBaseComposer}
          deleteItemComposer={this.deleteItemComposer}
          completeItemComposer={this.completeItemComposer}
          reorderItemComposer={this.reorderItemComposer}
          changeColorComposer={this.changeColorComposer}
          updateItem={this.updateItemDispatch}
        />
      </Card>
    );
  }
}

TodoContainer.propTypes = {
  baseItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  items: PropTypes.objectOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  listID: PropTypes.string.isRequired,
  newItem: PropTypes.func.isRequired,
  changeBaseItem: PropTypes.func.isRequired,
  completeItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  reorderItem: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

function mapStateToProps({ items, baseItem }) {
  return { items, baseItem };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newItem,
      changeBaseItem,
      completeItem,
      deleteItem,
      reorderItem,
      changeColor,
      updateItem,
      updateData: updateDataThrottled,
    },
    dispatch,
  );
}

export default withStyles(styleSheet)(
  connect(mapStateToProps, mapDispatchToProps)(TodoContainer),
);
