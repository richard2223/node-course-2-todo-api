const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59cb82e12ef5d71cd4507a1f11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('invalid id');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo)
//     return console.log('notfound');
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('59cb6bd5b586db19608ab551').then((todo) => {
  if (!todo)
    return console.log('notfound');
  console.log('User', todo);
}).catch((e) => console.log(e));
