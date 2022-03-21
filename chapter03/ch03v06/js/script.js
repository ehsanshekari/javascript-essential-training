/*
   Function Constructors
*/

function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.getOld = function () {
  this.age++;
}

var person1 = new Person('Ehsan', 33);
var person2 = new Person('Amir', 36);

console.log(person1.age);
console.log(person1.name);
person1.getOld();
console.log(person1.age);

console.log('---------------------------');

console.log(person2.age);
console.log(person2.name);
person2.getOld();
console.log(person2.age);