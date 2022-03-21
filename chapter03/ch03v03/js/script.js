/*
 1. length
 2. typeof
 3. for loop
 4. Array.isArray
 5. push function
*/

var myArray = ['Ehsan', 33, true, 'JS'];
console.log(myArray);
console.log(myArray.length);
console.log('typeof:', typeof myArray)
console.log('Array.isArray:', Array.isArray(myArray));
console.log('Array.isArray:', Array.isArray('string value'));

for (var i = 0; i < myArray.length; i++) {
    console.log('myArray[' + i + ']', myArray[i]);
}

var myArray2 = [];
for (var i = 0; i < 10; i++) {
    myArray2[i] = i;
}
console.log(myArray2);
myArray2[myArray2.length] = 10;
console.log(myArray2);
myArray2.push(11);
console.log(myArray2);