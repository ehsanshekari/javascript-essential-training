/* 
1: Add to the end of the body
2: In a specific posistion
*/

var newElement = document.createElement('h2'); // Step 1
var newText = document.createTextNode('My Heading 2'); // Step 2
newElement.style.color = 'red';
newElement.classList.add('grey-bg');
newElement.setAttribute('title', 'my title');
var temp = newElement.getAttribute('title');
console.log(temp);

newElement.appendChild(newText); // Step 3
document.body.appendChild(newElement);


/* var newElement = document.createElement('li'); // Step 1
var newText = document.createTextNode('Another Song'); // Step 2

newElement.appendChild(newText); // Step 3
var mySongs = document.querySelector('#songs');
mySongs.insertBefore(newElement, mySongs.children[2]);*/