import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { indigo } from 'material-ui/colors';
import NavbarDrawer from './NavbarDrawer';

const styleSheet = createStyleSheet(theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
  },
  flexGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '400px',
    '@media(max-width: 600px)': {
      display: 'none',
    },
  },
  navFont: {
    color: 'white',
    padding: '5px',
    cursor: 'pointer',
  },
  iconGroup: {
    '@media(min-width:601px)': {
      display: 'none',
    },
  },
  active: {
    borderBottom: '2px solid red',
  },
  inactive: {
    '&:hover': {
      borderBottom: `2px solid ${indigo[300]}`,
    },
  },
  container: {
    width: '100%',
    boxSizing: 'border-box',
  },
  nameText: {
    color: 'white',
    fontSize: '2rem',
  },
}));

const Navbar = (props) => {
  const classes = props.classes;
  const aboutActive =
  props.activePage === 'about' ? classes.active : classes.inactive;
  const portfolioActive =
  props.activePage === 'portfolio' ? classes.active : classes.inactive;
  const connectActive =
  props.activePage === 'connect' ? classes.active : classes.inactive;

  const changePageComposer = page => function () {
    props.changePage(page);
  };

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.flex}>
          <div>
            <Typography type="title" className={classes.nameText}>
              {'Ian Sudderth'}
            </Typography>
          </div>
          <div className={classes.flexGroup}>
            <Typography
              className={`${classes.navFont} ${aboutActive}`}
              type="title"
              onClick={changePageComposer('about')}
            >
              {'About'}
            </Typography>
            <Typography
              className={`${classes.navFont} ${portfolioActive}`}
              type="title"
              onClick={changePageComposer('portfolio')}
            >
              {'Portfolio'}
            </Typography>
            <Typography
              className={`${classes.navFont} ${connectActive}`}
              type="title"
              onClick={changePageComposer('connect')}
            >
              {'Connect'}
            </Typography>
          </div>
          <div className={classes.iconGroup}>
            <NavbarDrawer
              activePage={props.activePage}
              changePageComposer={changePageComposer}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object,
  activePage: PropTypes.string,
  changePage: PropTypes.func,
};

export default withStyles(styleSheet)(Navbar);
