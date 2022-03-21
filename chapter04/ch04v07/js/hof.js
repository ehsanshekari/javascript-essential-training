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

function convert(convertFunc, value) {
    return convertFunc(value);
}

document.write(convert(toCentigarde, 100));
document.write('<br>');
document.write(convert(toFarenheit, 100));