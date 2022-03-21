var counter = 0;

function dec(a, b) {
    console.log(that);
    counter--;
    document.querySelector('#counter').innerText = counter;
}


function inc(that, event) {
    // console.log(e.clientX);
    // console.log(e.clientY);
    // e.target.style.color = 'blue';
    console.log(that);
    console.log(event.target);
    counter++;
    document.querySelector('#counter').innerText = counter;
}