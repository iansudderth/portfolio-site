import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { indigo } from 'material-ui/colors';
import NavbarDrawer from './NavbarDrawer';

const styleSheet = {
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
    cursor: 'pointer',
  },
};

const Navbar = props => {
  const {
    active,
    inactive,
    flex,
    nameText,
    flexGroup,
    navFont,
    iconGroup,
  } = props.classes;
  const aboutActive = props.activePage === 'about' ? active : inactive;
  const portfolioActive = props.activePage === 'portfolio' ? active : inactive;
  const connectActive = props.activePage === 'connect' ? active : inactive;

  const changePageComposer = page => () => {
    props.changePage(page);
  };

  return (
    <div>
      <AppBar>
        <Toolbar className={flex}>
          <div>
            <Typography
              type="title"
              className={nameText}
              onClick={changePageComposer('about')}
            >
              {'Ian Sudderth'}
            </Typography>
          </div>
          <div className={flexGroup}>
            <Typography
              className={`${navFont} ${aboutActive}`}
              type="title"
              onClick={changePageComposer('about')}
            >
              {'About'}
            </Typography>
            <Typography
              className={`${navFont} ${portfolioActive}`}
              type="title"
              onClick={changePageComposer('portfolio')}
            >
              {'Portfolio'}
            </Typography>
            <Typography
              className={`${navFont} ${connectActive}`}
              type="title"
              onClick={changePageComposer('connect')}
            >
              {'Connect'}
            </Typography>
          </div>
          <div className={iconGroup}>
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  activePage: PropTypes.string,
  changePage: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  activePage: 'About',
};

export default withStyles(styleSheet)(Navbar);
