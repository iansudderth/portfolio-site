import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import AmountInput from './AmountInput';
import EditMenu from './EditMenu';

const styles = {
  headerContainer: {
    fontFamily: 'Roboto',
    padding: 18,
    borderBottom: `4px double ${red[500]}`,
    marginBottom: 18,
    display: 'flex',
    justifyContent: 'space-between',
  },
  servingsContainer: {
    fontSize: 20,
    fontWeight: 300,
    margin: 0,
    paddingTop: 18,
    '& h2': {
      margin: 0,
      marginLeft: -12,
    },
  },
  title: {
    margin: 0,
    fontSize: 40,
  },
  editMenuContainer: {},
  displayContainer: {
    flexGrow: 1,
  },
};

function Header(props) {
  const {
    headerContainer,
    servingsContainer,
    title,
    displayContainer,
    editMenuContainer,
  } = props.classes;

  return (
    <div className={headerContainer}>
      <div className={displayContainer}>
        <div>
          <h1 className={title}>{props.title}</h1>
        </div>
        <div className={servingsContainer}>
          <h2 style={{ fontWeight: 400 }}>
            <AmountInput
              amount={props.serving.amount}
              unit={props.serving.unit}
              scalingFactor={props.scalingFactor}
              fontSize={30}
            />
          </h2>
        </div>
      </div>
      <div className={editMenuContainer}>
        <EditMenu recipeHasPassword={props.recipeHasPassword} />
      </div>
    </div>
  );
}

Header.propTypes = {
  scalingFactor: PropTypes.number,
  title: PropTypes.string,
  serving: PropTypes.shape({
    amount: PropTypes.number,
    unit: PropTypes.string,
  }),
};

Header.defaultProps = {
  scalingFactor: 1,
  title: 'Recipe',
  serving: {
    amount: 1,
    unit: 'servings',
  },
};

export default withStyles(styles)(Header);
