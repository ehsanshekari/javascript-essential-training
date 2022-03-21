function divHandler(){
    alert('div is clicked!')
}

function pHandler(){
    event.stopPropagation();
    alert('paragraph is clicked!')
}

function bHandler(){
    alert('bold tag is clicked!')
}