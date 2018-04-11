import React from 'react';
import PropTypes from 'prop-types';
// import _ from "lodash";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import ChevronRight from 'material-ui-icons/ChevronRight';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import NewItemForm from './NewItemForm';
import {
  primaryColorParser,
  fadedColorParser,
  textColorParser,
  accentColorParser,
  accentTextColorParser,
  fadedAccentColorParser,
} from '../helpers/colorParser';
import HeaderMenu from './HeaderMenu';
import EditableTextArea from './EditableTextArea';

const styleSheet = {
  titleContainer: {
    padding: 16,
    display: 'flex',
  },
  titleText: {
    flexGrow: 1,
  },
  crumb: {
    alignItems: 'center',
    display: 'inline-flex',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  crumbContainer: {
    padding: 16,
  },
};

const ListHeader = props => {
  const { titleContainer, titleText, crumb, crumbContainer } = props.classes;
  const currentItemColor = props.items[props.baseItem].color;
  const incompleteColor = primaryColorParser(currentItemColor);
  const incompleteTextColor = textColorParser(currentItemColor);
  const incompleteAccentColor = accentColorParser(currentItemColor);
  const completeAccentColor = fadedAccentColorParser(currentItemColor);
  const incompleteAccentTextColor = accentTextColorParser(currentItemColor);
  const complete =
    props.baseItem === 'root' ? false : props.items[props.baseItem].complete;

  const completeColor = fadedColorParser(currentItemColor);
  const textColor = complete ? '#000000' : incompleteTextColor;
  const bgColor = complete ? completeColor : incompleteColor;
  const accentColor = complete ? completeAccentColor : incompleteAccentColor;
  const accentTextColor = complete ? '#000000' : incompleteAccentTextColor;

  const headerText = props.items[props.baseItem].content;

  const BreadCrumb = () => {
    let trail = [];
    let current = props.baseItem;
    let counter = 0;
    if (current === 'root') {
      trail = ['root'];
    } else {
      while (props.items[current].parent !== 'root' && counter < 10) {
        trail = [current, ...trail];
        current = props.items[current].parent;
        counter += 1;
      }
      trail = ['root', current, ...trail];
    }
    return (
      <Typography
        type={'body1'}
        className={crumbContainer}
        style={{ color: textColor }}
      >
        {trail.map((item, index) => (
          <span
            key={`breadcrumb-${item}`}
            className={crumb}
            onClick={props.changeBaseComposer(item)}
            role="link"
          >
            {props.items[item].content}
            {index < trail.length - 1 ? <ChevronRight /> : ''}{' '}
          </span>
        ))}
      </Typography>
    );
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: '.5s',
      }}
    >
      <div className={titleContainer}>
        {props.baseItem === 'root' ? (
          <IconButton />
        ) : (
          <Checkbox
            checked={complete}
            onClick={props.completeItemComposer(props.baseItem)}
            style={{ color: textColor }}
          />
        )}
        <div className={titleText}>
          <EditableTextArea
            primary={headerText}
            secondary={props.counterText}
            textColor={textColor}
            rawText={headerText}
            updateItem={props.updateItem}
            id={props.baseItem}
            complete={complete}
            header
          />
        </div>
        <HeaderMenu
          textColor={textColor}
          baseItem={props.baseItem}
          changeColorComposer={props.changeColorComposer}
        />
      </div>
      <Divider />
      <BreadCrumb />
      <Divider />
      <NewItemForm
        newItemAction={props.newItemAction}
        textColor={textColor}
        accentColor={accentColor}
        accentTextColor={accentTextColor}
      />
      <Divider />
    </div>
  );
};

ListHeader.propTypes = {
  newItemAction: PropTypes.func.isRequired,
  changeColorComposer: PropTypes.func.isRequired,
  changeBaseComposer: PropTypes.func.isRequired,
  baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  updateItem: PropTypes.func.isRequired,
  counterText: PropTypes.string.isRequired,
  completeItemComposer: PropTypes.func.isRequired,
  items: PropTypes.objectOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(ListHeader);
