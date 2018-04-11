import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeContainer from './container/RecipeContainer';
import RecipeEditorContainer from './container/RecipeEditorContainer';
import NavBar from './components/NavBar';
import SaveDialog from './components/dialogs/SaveDialog';
import EditAuthDialog from './components/dialogs/EditAuthDialog';
import DiscardChangesDialog from './components/dialogs/DiscardChangesDialog';
import UpdateDialog from './components/dialogs/UpdateDialog';
import DeleteDialog from './components/dialogs/DeleteDialog';

function App(props) {
  return (
    <div>
      <NavBar />
      {props.editMode ? <RecipeEditorContainer /> : <RecipeContainer />}
      <SaveDialog />
      <EditAuthDialog />
      <DiscardChangesDialog />
      <UpdateDialog />
      <DeleteDialog />
    </div>
  );
}

function mapStateToProps({ editMode }) {
  return { editMode };
}

export default connect(mapStateToProps)(App);
