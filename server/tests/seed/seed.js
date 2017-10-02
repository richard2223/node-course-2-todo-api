const { ObjectID } = require('mongodb');

const jwt = require('jsonwebtoken')

const  { Todo } = require('./../../models/todo');
const  { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'richard@deepred.co.za',
  password: 'userOnePassword',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'secret').toString()
  }]
}, {
  _id: userTwoId,
  email: 'nikki@deepred.co.za',
  password: 'userTwoPassword',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'secret').toString()
  }]
}];

const todos = [
  { _id: new ObjectID(), text: 'first todo', _creator: userOneId },
  { _id: new ObjectID(), text: '2nd todo', _creator: userTwoId, completed: true, completedAt: 0 },
];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
