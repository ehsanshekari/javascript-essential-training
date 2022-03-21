/*
Give me all Users
[
  {id:1, firstName: 'Ehsan',  lastname: 'Shekari', birthday: '1366/01/01'},
  {id:2, firstName: 'Mohammad',  lastname: 'Mohamadi', birthday: '1365/01/01'},
  {id:3, firstName: 'John',  lastname: 'Doe', birthday: '1367/02/02'},
  ...
]
*/

/*
Give me user with id 1
  {id:1, firstName: 'Ehsan',  lastname: 'Shekari', birthday: '1366/01/01'},
*/

/*
 Update user 1 with
 {
   firstname: 'Jack',
   lastname: 'Chan'
 }
*/

var users = [
  {id:1, firstName: 'Ehsan',  lastname: 'Shekari', birthday: '1366/01/01', isProgrammer: true},
  {id:2, firstName: 'Mohammad',  lastname: 'Mohamadi', birthday: '1365/01/01'},
  {id:3, firstName: 'John',  lastname: 'Doe', birthday: '1367/02/02'}
];

var jsonUsers = JSON.stringify(users);
console.log(typeof jsonUsers, jsonUsers);


var jUser = JSON.stringify({id:1, firstName: 'Ehsan',  lastname: 'Shekari', birthday: new Date()});
console.log(typeof jUser, jUser);

var myUser = JSON.parse(jUser);
console.log(typeof myUser, myUser);
