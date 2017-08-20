import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { indigo, deepOrange, grey } from 'material-ui/colors';
import Navbar from './Navbar';
import AboutPage from './AboutPage/';
import ConnectPage from './ConnectPage/';
import PortfolioPage from './PortfolioPage/';

const styles = createStyleSheet(theme => ({
  '@global body': {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    paddingTop: 88,
    boxSizing: 'border-box',
    width: '100vw',
  },
  '@media (max-width: 600px)': {
    '@global body': { paddingTop: '80px' },
  },
  '@global html': {
    background: `linear-gradient(135deg, ${indigo[50]}, ${grey[50]})`,
    margin: 0,
    padding: 0,
    width: '100vw',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}));

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'about',
    };
  }

 changePage = (page) => {
   this.setState({ activePage: page });
 };

 render() {
   const ActivePage = () => {
     switch (this.state.activePage) {
       case 'about':
         return <AboutPage />;
       case 'portfolio':
         return <PortfolioPage />;
       case 'connect':
         return <ConnectPage />;
       default:
         return <AboutPage />;
     }
   };

   const classes = this.props.classes;
   return (
     <div>
       <Navbar
         activePage={this.state.activePage}
         changePage={this.changePage}
       />
       <div>
         <ActivePage />
       </div>
     </div>
   );
 }
}

Layout.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Layout);
