import React, { Component } from "react";
import TodoList from "../react-files/todo-list/src/index.js";
import withRoot from "../style/withRoot";

class Todo extends Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  seedState = {
    items: this.props.query.initialState.items,
    baseItem: this.props.query.initialState.baseItem
  };
  listID = this.props.query.initialState._id;

  render() {
    return <TodoList seedState={this.seedState} listID={this.listID} />;
  }
}

export default withRoot(Todo);
