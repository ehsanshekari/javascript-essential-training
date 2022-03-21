/*
setTimeout
clearTimeout
setInterval
clearInterval
*/

function writeLater() {
    document.write('Hello World!');
}
var intervalId = setInterval(writeLater, 2000);

setTimeout(function(){ clearInterval(intervalId);}, 7000);
