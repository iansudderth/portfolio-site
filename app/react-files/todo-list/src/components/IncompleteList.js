import React from 'react';
import PropTypes from 'prop-types';
// import _ from "lodash";
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import ListItem from './ListItem';
import { primaryColorParser, textColorParser } from '../helpers/colorParser';

const styleSheet = {
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  root: {
    padding: 0,
  },
  helper: {
    transition: 0,
  },
};

const SortableList = SortableContainer(props => (
  <List className={props.classForList}>
    {props.items.map((value, index) => (
      <SortableListItem
        key={`item-${value.id}`}
        index={index}
        value={value}
        changeBaseComposer={props.changeBaseComposer}
        deleteItemComposer={props.deleteItemComposer}
        completeItemComposer={props.completeItemComposer}
        changeColorComposer={props.changeColorComposer}
        bgColorComposer={props.bgColorComposer}
        textColorComposer={props.textColorComposer}
        updateItem={props.updateItem}
      />
    ))}
  </List>
));

const SortableListItem = SortableElement(props => (
  <ListItem
    value={props.value}
    changeBaseComposer={props.changeBaseComposer}
    deleteItemComposer={props.deleteItemComposer}
    completeItemComposer={props.completeItemComposer}
    changeColorComposer={props.changeColorComposer}
    itemColor={props.bgColorComposer(props.value.color)}
    textColor={props.textColorComposer(props.value.color, props.value.complete)}
    updateItem={props.updateItem}
  />
));

const IncompleteList = props => {
  const classes = props.classes;

  function handleSort({ oldIndex, newIndex }) {
    props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
  }

  return (
    <div>
      <SortableList
        items={props.items}
        useDragHandle
        onSortEnd={handleSort}
        changeBaseComposer={props.changeBaseComposer}
        deleteItemComposer={props.deleteItemComposer}
        completeItemComposer={props.completeItemComposer}
        classForList={classes.root}
        changeColorComposer={props.changeColorComposer}
        bgColorComposer={primaryColorParser}
        textColorComposer={textColorParser}
        updateItem={props.updateItem}
        helperClass={props.classes.helper}
      />
    </div>
  );
};

IncompleteList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  updateItem: PropTypes.func.isRequired,
  changeColorComposer: PropTypes.func.isRequired,
  completeItemComposer: PropTypes.func.isRequired,
  deleteItemComposer: PropTypes.func.isRequired,
  changeBaseComposer: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  reorderItemComposer: PropTypes.func.isRequired,
  parentID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default withStyles(styleSheet)(IncompleteList);
