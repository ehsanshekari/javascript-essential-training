/* 
Higher-Order Functions
Ananymous functions
Return a function
Immediately Invoked Function (IIF)
Closure
*/


/* var myFunc = function (a, b){
 return a + b;
}

console.log(myFunc(10, 20));*/

/* function sumFunc(){
    return function(a , b){
        return a + b;
    }
}

var myFunction = sumFunc();
console.log(myFunction(10,40));*/

/* (function sayHello(name){
    document.write('Hello ' + name);
})('Ehsan');*/

function outerFunction(name){
    var x = 1000;
    function innerFunction(){
        console.log(x, name);
    }
    innerFunction();
}

outerFunction('Ehsan');
