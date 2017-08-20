import React from 'react';
// import style from "./style.css";
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import IncompleteList from './IncompleteList';
import CompleteList from './CompleteList';

const styleSheet = createStyleSheet('List', {
  container: {},
});

const List = (props) => {
  const itemsList = props.items;
  const baseItem = props.baseItem;
  let completeListItems = itemsList[baseItem].completeChildren;
  let incompleteListItems = itemsList[baseItem].incompleteChildren;


  function populateList(listArr) {
    return listArr.map(listID => itemsList[listID]);
  }

  completeListItems = populateList(completeListItems);
  incompleteListItems = populateList(incompleteListItems);

  const classes = props.classes;

  return (
    <div className={classes.container}>
      <IncompleteList
        items={incompleteListItems}
        parentID={props.baseItem}
        renderChildren
        changeBaseComposer={props.changeBaseComposer}
        deleteItemComposer={props.deleteItemComposer}
        completeItemComposer={props.completeItemComposer}
        reorderItemComposer={props.reorderItemComposer}
        changeColorComposer={props.changeColorComposer}
        updateItem={props.updateItem}
      />
      <CompleteList
        items={completeListItems}
        parentID={props.baseItem}
        renderChildren
        changeBaseComposer={props.changeBaseComposer}
        deleteItemComposer={props.deleteItemComposer}
        completeItemComposer={props.completeItemComposer}
        reorderItemComposer={props.reorderItemComposer}
        changeColorComposer={props.changeColorComposer}
        updateItem={props.updateItem}
      />
    </div>
  );
};

List.propTypes = {
  items: PropTypes.object,
  baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  updateItem: PropTypes.func,
  changeColorComposer: PropTypes.func,
  reorderItemComposer: PropTypes.func,
  completeItemComposer: PropTypes.func,
  deleteItemComposer: PropTypes.func,
  changeBaseComposer: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styleSheet)(List);
