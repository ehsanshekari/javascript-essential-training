/* function myEventHandler() {
    alert('Hello Event!');
}

var myBtn = document.createElement('button');
var txt = document.createTextNode('Click Me!');
myBtn.appendChild(txt);
// myBtn.onclick = myEventHandler;
myBtn.addEventListener('mouseover', myEventHandler);
document.body.appendChild(myBtn);*/

document.querySelector('#div1').addEventListener('click', function () {
    alert('Hello Event!');
});