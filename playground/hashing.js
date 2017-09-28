const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'secret');
console.log(token);

var decoded = jwt.verify(token, 'secret');
console.log(decoded);


// var message = 'I am robot';
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'salty').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'salty').toString();
//
// if (resultHash === token.hash) {
//   console.log('valid hash');
// } else {
//   console.log('invalid hash');
// }
