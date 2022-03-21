var counter = 0;

function dec() {
    counter--;
    document.querySelector('#counter').innerText = counter;
}


function inc() {
    counter++;
    document.querySelector('#counter').innerText = counter;
}