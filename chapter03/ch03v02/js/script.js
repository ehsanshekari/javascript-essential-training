/*
 1. Defining an array (two ways)
 2. Storing different types in an array
 3. Zero-based
 4. Accessing array Elements
 5. Adding an elemet to the array
*/

/* var name1 = 'Ehsan';
var name2 = 'Amir';
var name3 = 'Akbar'; */

var names = ['Ehsan', 'Amir', 'Akbar'];
console.log(names[0]);
console.log(names[1]);
names[0] = 'Sepehr';
console.log(names[0]);
names[3] = 'Masood';
console.log(names);
names[10] = 'Mostafa';
console.log(names);

var myArray = new Array('Ehsan', 33, true);
console.log(myArray);

// var myArray = ['Ehsan', 33, true, 'JS'];

