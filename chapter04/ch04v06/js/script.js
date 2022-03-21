// Math Object

/* Math.round(4.7); // 5

Math.pow(8, 2); // 64

Math.sqrt(64);  // 8

Math.abs(-4.7); // 4.7

Math.floor(4.7); // 4

Math.ceil(4.7); // 5

Math.random(); // 0 <= x < 1*/

var min = 100;
var max = 200;

for(var i = 0; i < 20; i++){
  // console.log(Math.floor(Math.random() * 6) + 1); // 1 <= x <= 6 
  console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 100 <= x <= 200
}

// Math.floor(Math.random() * (max - min + 1)) + min;
