var a = prompt("Enter the first number");
var b = prompt("Enter the second number");

a = parseFloat(a);
b = parseFloat(b);

if (isNaN(a) || isNaN(b)) {
    document.write('Enter valid numbers!');
}
else {
    var c = a + b;
    document.write(c);
}

