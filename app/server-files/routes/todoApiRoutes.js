const TodoState = require('../schema/todo-list/TodoState');

function updateRecipe(req, res) {
  const id = req.params.id;
  const newState = req.body.newState;
  //   console.log('id', id);
  // console.log("new state", newState)

  TodoState.findByIdAndUpdate(id, newState, (error, updatedState) => {
    if (error) {
      console.log(error);
      res.send('we got it but something went wrong');
    } else {
      res.send('we got it and it was updated!!!');
      // console.log("updatedState",updatedState)
    }
  });
}

module.exports.updatedRecipe = updateRecipe;
