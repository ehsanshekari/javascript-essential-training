// Objects the second look

var myObject = {
  x: 1,
  y: 2,
  z: 'test',
  myMethod: function () {
    console.log(this.x, this.y, this.z);
  }
}

myObject.a = 100;
console.log(myObject.a);

delete myObject.x;
console.log(myObject.x);

var myArray = Object.keys(myObject);
console.log(myArray);

var newObject = Object.assign({ a: 100 }, { a: 200 })
console.log('newObject', newObject);