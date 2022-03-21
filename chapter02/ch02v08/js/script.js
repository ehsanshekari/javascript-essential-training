/*
 if(CONDITION){
     statement#1;
     statement#2;
     ...
 }
 else{
     statement#1;
     statement#2;
     ...  
 }
*/

var a = parseInt(prompt('Enter a number'));
if(a % 2 === 0){
    document.write('EVEN NUMBER');
} 
else {
   document.write('ODD NUMBER');
}