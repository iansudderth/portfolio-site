import React, { Component } from 'react';
import Recipe from '../react-files/recipe/index';
import withRoot from '../style/withRoot';

class RecipePage extends Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  seedState = {
    recipeList: this.props.query.recipeList,
  };

  render() {
    return <Recipe seedState={this.seedState} />;
  }
}

export default withRoot(RecipePage);
