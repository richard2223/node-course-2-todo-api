//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('failed to connect to MongoDB server', err);
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('59cb489f077f5040f4f83f3c')}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fecth todos', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fecth todos', err);
  // });

  db.collection('Users').find({name: 'dick'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fecth todos', err);
  });

  // db.close();
});
