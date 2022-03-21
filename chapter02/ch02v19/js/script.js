var degFahren = 100;
var x = 100;

function toCentigarde(degFahren) {
    var degCent;
    x = 1000;
    degCent = 5/9 * (degFahren - 32);
    degFahren = 89898;
    return degCent;
}

toCentigarde(degFahren);
document.write('degFahren:' , degFahren);
document.write('<br>');
document.write('x', x);