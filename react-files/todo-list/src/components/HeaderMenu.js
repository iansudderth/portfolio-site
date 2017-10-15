import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui-icons/Settings';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import ColorMenu from './ColorMenu';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: undefined,
    };
  }

  openMenu = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  colorItemClickHandler = colorName => {
    const close = this.closeMenu;
    const changeColor = this.props.changeColorComposer(
      this.props.baseItem,
      colorName,
    );
    return () => {
      changeColor();
      close();
    };
  };

  render() {
    return (
      <div>
        <IconButton
          onClick={this.openMenu}
          style={{ color: this.props.textColor }}
        >
          <Settings />
        </IconButton>
        <Menu
          id={`${this.props.baseItem}-menu`}
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
        </Menu>
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  baseItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  textColor: PropTypes.string,
  changeColorComposer: PropTypes.func.isRequired,
};

HeaderMenu.defaultProps = {
  textColor: 'black',
};

export default HeaderMenu;
