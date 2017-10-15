import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { SortableHandle } from 'react-sortable-hoc';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Reorder from 'material-ui-icons/Reorder';
import DeleteForever from 'material-ui-icons/DeleteForever';
import Settings from 'material-ui-icons/Settings';
import FormatListBulleted from 'material-ui-icons/FormatListBulleted';
import { red, grey } from 'material-ui/colors';
import Button from 'material-ui/Button';
import Menu from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { primaryColorParser, fadedColorParser } from '../helpers/colorParser';
import ListItemTextArea from './ListItemTextArea';
import ColorMenu from './ColorMenu';

const DragHandle = SortableHandle(props => {
  const activeStyle = props.complete ? {} : { cursor: 'pointer' };
  const centerStyle = { display: 'flex', alignItems: 'center', margin: 12 };

  return (
    <span style={{ ...props.completeStyle, ...activeStyle, ...centerStyle }}>
      <Reorder />
    </span>
  );
});

class BaseListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: undefined,
    };
  }

  item = this.props.value;

  incompleteListStyle = {
    backgroundColor: primaryColorParser(this.item.color),
  };
  completeListStyle = { backgroundColor: fadedColorParser(this.item.color) };
  completeGrey = grey[500];
  completeLineStyle = this.item.complete
    ? { color: this.completeGrey, textDecoration: 'line-through' }
    : {};
  completeStyle = this.item.complete
    ? { color: this.completeGrey }
    : { color: this.textColor };

  completeDisplay = () => {
    const completed = this.item.completeChildren.length;
    const total = completed + this.item.incompleteChildren.length;
    const displayTextStyle = this.props.value.complete
      ? { color: this.completeGrey }
      : { color: this.props.textColor };
    if (total === 0) {
      return '';
    }
    return (
      <span
        style={displayTextStyle}
      >{`( ${completed} / ${total} complete)`}</span>
    );
  };

  content = () => {
    const contentTextStyle = this.props.value.complete
      ? { color: this.completeGrey, textDecoration: 'line-through' }
      : { color: this.props.textColor };
    return (
      <span
        style={{
          ...contentTextStyle,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
        }}
      >
        {this.item.content}
      </span>
    );
  };

  openMenu = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  colorItemClickHandler = colorName => {
    const close = this.closeMenu;
    const changeColor = this.props.changeColorComposer(this.item.id, colorName);
    return () => {
      changeColor();
      close();
    };
  };

  render() {
    const textColor = this.props.value.complete
      ? this.completeGrey
      : this.props.textColor;
    return (
      <ListItem
        divider
        style={{
          transition: 'all 0s, background-color .5s',
          backgroundColor: this.props.itemColor,
          padding: 12,
        }}
      >
        <DragHandle
          completeStyle={{ color: textColor }}
          complete={this.item.complete}
        />
        <Checkbox
          checked={this.item.complete}
          onClick={this.props.completeItemComposer(this.item.id)}
          style={{ color: textColor }}
        />

        <ListItemTextArea
          primary={this.content()}
          secondary={this.completeDisplay()}
          textColor={textColor}
          rawText={this.item.content}
          updateItem={this.props.updateItem}
          id={this.item.id}
          complete={this.item.complete}
        />

        <IconButton
          onClick={this.props.changeBaseComposer(this.item.id)}
          style={{ color: textColor }}
        >
          <FormatListBulleted />
        </IconButton>
        <IconButton onClick={this.openMenu} style={{ color: textColor }}>
          <Settings />
        </IconButton>
        <Menu
          id={`${this.item.id}-menu`}
          open={this.state.open}
          onRequestClose={this.closeMenu}
          anchorEl={this.state.anchorEl}
        >
          <Typography
            type={'subheading'}
            align={'center'}
            style={{ outline: 'none', paddingLeft: 16 }}
          >
            {'Change Color'}
          </Typography>
          <Divider />
          <ColorMenu clickHandler={this.colorItemClickHandler} />
          <Divider />
          <div style={{ textAlign: 'center' }}>
            <Button
              style={{
                color: 'white',
                backgroundColor: red[500],
                marginTop: 8,
              }}
              onClick={this.props.deleteItemComposer(this.item.id)}
            >
              <DeleteForever /> {'Delete Item'}
            </Button>
          </div>
        </Menu>
      </ListItem>
    );
  }
}

BaseListItem.propTypes = {
  deleteItemComposer: PropTypes.func.isRequired,
  changeBaseComposer: PropTypes.func.isRequired,
  completeItemComposer: PropTypes.func.isRequired,
  itemColor: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired,
  changeColorComposer: PropTypes.func.isRequired,
};

BaseListItem.defaultProps = {
  itemColor: 'blue',
  textColor: 'black',
};

export default BaseListItem;
