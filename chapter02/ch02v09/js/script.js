/*
 if (CONDITION) {
     statement#1;
     statement#2;
     ...
 }
 else {
     statement#1;
     statement#2;
     ...  
 }

 == ===
 != !==
 > >= < <= 
 && || !
*/

var grade = parseInt(prompt('Enter your grade'));

if (grade >= 0 && grade < 10) {
  document.write('D');
}
else if (grade >= 10 && grade < 15) {
  document.write('C');
}
else if (grade >= 15 && grade < 17) {
  document.write('B');
}
else {
  document.write('A');
}
