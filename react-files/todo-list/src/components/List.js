import React from 'react';
// import style from "./style.css";
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { withStyles } from 'material-ui/styles';
import IncompleteList from './IncompleteList';
import CompleteList from './CompleteList';

const styleSheet = {
  container: {},
};

const List = props => {
  const itemsList = props.items;
  const baseItem = props.baseItem;
  let completeListItems = itemsList[baseItem].completeChildren;
  let incompleteListItems = itemsList[baseItem].incompleteChildren;

  function populateList(listArr) {
    return listArr.map(listID => itemsList[listID]);
  }

  completeListItems = populateList(completeListItems);
  incompleteListItems = populateList(incompleteListItems);

  const { container } = props.classes;

  return (
    <div className={container}>
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
  items: PropTypes.objectOf(PropTypes.object).isRequired,
  baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  updateItem: PropTypes.func.isRequired,
  changeColorComposer: PropTypes.func.isRequired,
  reorderItemComposer: PropTypes.func.isRequired,
  completeItemComposer: PropTypes.func.isRequired,
  deleteItemComposer: PropTypes.func.isRequired,
  changeBaseComposer: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(List);
