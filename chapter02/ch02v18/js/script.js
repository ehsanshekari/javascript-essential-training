/*
 1. function benefits
  -> better code oragnization
  -> code reuse
  -> easier debug
 degCent = 5/9 * (degFahren - 32);
 degFahren = (9/5 * degCent) + 32  
*/

function toCentigarde(degFahren) {
    var degCent;
    degCent = 5/9 * (degFahren - 32);
    return degCent;
}

function toFarenheit(degCent) {
    var degFahren;
    degFahren = (9/5 * degCent) + 32 ;
    return degFahren;
}

console.log('20 f to c:', toCentigarde(20));
console.log('45 c to f:', toFarenheit(45));