/*
 1. What is a function?
 2. How to write (define) a function?
 3. How to call (invoke) a function?
 4. return keyword
 ex. greet, fahren2Cent
*/

// alert prompt isNaN parseFloat

/*
  function functionName(input1, input2, ....){
      statement #1;
      statement #2;
      ....
  }
*/


/* function greet(name){
    document.write('HELLO ' + name + '!');
}

greet('Ehsan'); */

function sum (a , b) {
    return a + b;
}

var value = sum(10, 20);
document.write('Sum of 10 & 20 is: ' + value);