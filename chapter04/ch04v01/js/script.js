// Array functions

var myArray = ['John','Jane', 'Sara', 'Tom'];

// length
console.log('myArray.length:', myArray.length); // 4


// push
var length = myArray.push('James');
// ['John','Jane', 'Sara', 'Tom'] ->  ['John','Jane', 'Sara', 'Tom', 'James']
console.log('push', myArray, length);


// pop
var element = myArray.pop();
// ['John','Jane', 'Sara', 'Tom', 'James'] ->  ['John','Jane', 'Sara', 'Tom']
console.log('pop', myArray, element);


// shift
var element = myArray.shift();
// ['John','Jane', 'Sara', 'Tom'] -> ['Jane', 'Sara', 'Tom']
console.log('shift', myArray, element);


// unshift
var length = myArray.unshift('John');
// ['Jane', 'Sara', 'Tom'] -> ['John','Jane', 'Sara', 'Tom']
console.log('unshift', myArray, length);


// indexOf & lastIndexOf
// ['John','Jane', 'Sara', 'Tom']
var position = myArray.indexOf('Sara');  // 2
console.log('indexOf', position);
myArray.push('Sara'); // 
position = myArray.lastIndexOf('Sara'); 
console.log('lastIndexOf', position); // 4


// slice
// ['John','Jane', 'Sara', 'Tom', 'Sara']
var newArray = myArray.slice(1,4);
console.log('slice', newArray); // ['Jane', 'Sara', 'Tom']


// join
var joinedString = myArray.join(',');
// ['John','Jane', 'Sara', 'Tom', 'Sara'] -> John,Jane,Sara,Tom,Sara
console.log('join', joinedString);


// sort
myArray.sort();
// ['John','Jane', 'Sara', 'Tom', 'Sara'] -> ['Jane', 'John', 'Sara', 'Sara', 'Tom']
console.log('sort', myArray);


// reverse
myArray.reverse()
// ['Jane', 'John', 'Sara', 'Sara', 'Tom'] ->  ['Tom', 'Sara', 'Sara', 'John', 'Jane']
console.log('reverse', myArray);


// concat
var myArray1 = [1, 2];
var myArray2 = [3, 4];
// [1, 2] [3, 4]  -> [1, 2, 3, 4]
var newArray = myArray1.concat(myArray2);
console.log('concat', newArray);

