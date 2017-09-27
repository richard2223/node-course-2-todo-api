//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('failed to connect to MongoDB server', err);
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something todo',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'dick',
  //   age: 43,
  //   location: 'ZA'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  db.close();
});
