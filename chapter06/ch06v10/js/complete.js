var counter = 0;

function inc() {
    counter++;
    document.querySelector('#counter').innerText = counter;
}

function dec() {
    counter--;
    document.querySelector('#counter').innerText = counter;
}