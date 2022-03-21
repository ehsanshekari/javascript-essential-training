// forEach

var myArray = ['John', 'Jane', 'Sam'];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* function printElement(value, index, array){
    console.log(value, index, array);
}*/

myArray.forEach(function(value, index){
    console.log(value, index);
});
