const initialState = {
  baseItem: 'root',
  items: {
    1001: {
      id: 1001,
      content: 'Welcome To The Recursive Todo List!',
      complete: false,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1002: {
      id: 1002,
      content: 'Every Todo List Item is also a Todo List!',
      complete: false,
      color: 'lightBlue',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1003: {
      id: 1003,
      content:
        'Click the List Icon to the right to open up the Todo List Children',
      complete: false,
      color: 'green',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [1008, 1011],
    },
    1004: {
      id: 1004,
      content:
        'The Gear Icon to the right lets you change colors or delete an item.',
      complete: false,
      color: 'pink',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1005: {
      id: 1005,
      content: 'The Icons to the left let you reorder or check-off items',
      complete: false,
      color: 'purple',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1006: {
      id: 1006,
      content:
        'Create new Items with the form above, and use the breadcrumbs above to navigate between Lists',
      complete: false,
      color: 'blue',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1007: {
      id: 1007,
      content: 'Double Click or Tap and Hold to edit an Item',
      complete: false,
      color: 'yellow',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1008: {
      id: 1008,
      content: 'You can have as many children as you like!',
      complete: false,
      color: 'orange',
      parent: 1003,
      completeChildren: [],
      incompleteChildren: [],
    },
    1009: {
      id: 1009,
      content: 'Completed Items are Greyed Out',
      complete: true,
      color: 'blue',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1010: {
      id: 1010,
      content:
        'Completed Items can still be edited and added to, but not reordered',
      complete: true,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    1011: {
      id: 1011,
      content: 'Use the BreadCrumbs above to navigate back',
      complete: false,
      color: 'yellow',
      parent: 1003,
      completeChildren: [],
      incompleteChildren: [],
    },
    1012: {
      id: 1012,
      content: 'All changes are automatically saved to this URL',
      complete: false,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    root: {
      content: 'Recursive Todo Lists!!!',
      color: 'blue',
      completeChildren: [1009, 1010],
      incompleteChildren: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012],
    },
  },
};

// function generateNewTodoList(){
// 	TodoState.create(initialState, (error, state) =>{
// 		if(error){
// 			console.log(error)
// 		} else {
// 			console.log("initialState created")
// 			return state._id
// 		}
// 	})

// }

function generateNewTodoList() {
  return initialState;
}

module.exports = generateNewTodoList;
