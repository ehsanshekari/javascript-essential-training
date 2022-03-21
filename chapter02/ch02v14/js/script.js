/*
...
 do {
   statement#1;
   statement#2;
   ...
 } while(CONDITION);
 ...
*/

var age;
do {
  age = prompt('Enter your age:');
} while (isNaN(age));

document.write(age)
