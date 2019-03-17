// var users = [
//     {
//     login: "a",
//     password: "1234"
//     },
//     {
//     login: "b",
//     password: "4321"
//     },
//     {
//     login: "c",
//     password: "1111"
//     }
// ];
var users = require('./users.json');
var uf =    require('./users-functions.js');

uf.showUsers(users);
// console.log("HI");