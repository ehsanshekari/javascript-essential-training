/*
 while(CONDITION){
   statement#1;
   statement#2;
   ...
 }
 ....
*/

/*
a += b; // a = a + b;
a -= b; // a = a - b;
a *= b; // a = a * b;
a /= b; // a = a / b;
*/

var n = parseInt(prompt('Enter the number of values'));
var i = 0;
var sum = 0;

while (i < n) {
  var value = parseFloat(prompt('Enter the number of values'));
  sum += value; // sum = sum + value
  i++;
}

document.write('Sum is: ' + sum);

