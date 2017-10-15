import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
// import _ from "lodash";
import ListItem from './ListItem';
import { fadedColorParser, textColorParser } from '../helpers/colorParser';

const styleSheet = {
  container: {
    margin: 0,
    padding: 0,
  },
};

const CompleteList = props => {
  const { container } = props.classes;

  return (
    <List className={container}>
      {props.items.map(value => (
        <ListItem
          key={`item-${value.id}`}
          value={value}
          changeBaseComposer={props.changeBaseComposer}
          deleteItemComposer={props.deleteItemComposer}
          completeItemComposer={props.completeItemComposer}
          changeColorComposer={props.changeColorComposer}
          itemColor={fadedColorParser(value.color)}
          textColor={textColorParser(value.color)}
          updateItem={props.updateItem}
        />
      ))}
    </List>
  );
};

CompleteList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  updateItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeBaseComposer: PropTypes.func.isRequired,
  deleteItemComposer: PropTypes.func.isRequired,
  completeItemComposer: PropTypes.func.isRequired,
  changeColorComposer: PropTypes.func.isRequired,
};

export default withStyles(styleSheet)(CompleteList);
