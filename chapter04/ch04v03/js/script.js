// Strings the second look

var myString = 'This is just a string! just a string!';

// length
console.log(myString.length); // 37

// Access each char
console.log(myString[0]); // T
console.log(myString[myString.length - 1]); // !
console.log(myString.charAt(0)); // T
console.log(myString.charAt(myString.length - 1)) // ! 

// indexOf & lastIndexOf
console.log('indexOf', myString.indexOf('string!')); // 15
console.log('lastIndexOf', myString.lastIndexOf('string!')); // 30

// substrings --> substr, substring, slice
var mySub = myString.substr(0, 4); // This
console.log('substr', mySub, mySub.length);

// split
var myString2 = 'AA,!BB,!CC';
var stringArray = myString2.split(',!');
console.log('split', stringArray); // ['AA', 'BB', 'CC']

// Comparing Strigs
console.log('A' > 'a');  // false
console.log('Ali' === 'ali'); // false
myString.toLowerCase();
myString.toUpperCase();

// repalce , search, match
