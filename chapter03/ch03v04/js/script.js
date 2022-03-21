/*
   Multi-dimensional Arrays (Arrays of Arrays)
*/

/* var myArray = [['Ehsan', ['JS', 'React']], [33, 36], true, 'JS'];
console.log(myArray[0][0]);
console.log(myArray[0][1]);
console.log(myArray[1][1]);
console.log(myArray[0][1][1]); */


// [ [1, 2] , [1, 2] ]

var myArray = [];
for(var i = 0; i < 2 ; i++){
   myArray[i] = [];
   for(var j = 0; j < 2; j ++){
      myArray[i][j] = j + 1;
   }
}
console.log(myArray);