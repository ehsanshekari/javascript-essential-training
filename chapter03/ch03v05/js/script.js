/*
   Objects
*/

/* var person = {
   name: 'Ehsan',
   age: 33,
   height: 175,
   getOld: function(){
      this.age++;
   }
};

console.log(person.age);
console.log(person.name);

person.getOld();
console.log(person.age)
*/

var person = new Object();
person.age = 33;
person.name = 'Ehsan';
person.getOld = function(){
   this.age++;
}
console.log(person.age);
console.log(person.name);

person.getOld();
console.log(person.age)