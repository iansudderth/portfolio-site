const TodoState = require('../schema/todo-list/TodoState');

const seedData = {
  baseItem: 'root',
  items: {
    1001: {
      id: 1001,
      content: 'Random seed from server 1',
      complete: false,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [1004],
    },
    1002: {
      id: 1002,
      content: 'Random seed from server 2',
      complete: false,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [1003],
    },
    1003: {
      id: 1003,
      content: 'Random seed from server 3',
      complete: false,
      color: 'red',
      parent: 1002,
      completeChildren: [],
      incompleteChildren: [],
    },
    1004: {
      id: 1004,
      content: 'Random seed from server 4',
      complete: false,
      color: 'red',
      parent: 1001,
      completeChildren: [],
      incompleteChildren: [],
    },
    1005: {
      id: 1005,
      content: 'Random seed from server 5',
      complete: true,
      color: 'red',
      parent: 'root',
      completeChildren: [],
      incompleteChildren: [],
    },
    root: {
      content: 'Recursive Todo Lists!!',
      color: 'red',
      completeChildren: [1005],
      incompleteChildren: [1001, 1002],
    },
  },
};

function seedDB() {
  TodoState.remove({}, error => {
    if (error) {
      console.log(error);
    } else {
      TodoState.create(seedData, (err, state) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Seeded DB data');
          console.log('Seed ID', state._id);
          return state._id;
        }
      });
    }
  });
}

module.exports = seedDB;
