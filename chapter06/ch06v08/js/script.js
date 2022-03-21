/*
1. removeAttribute
2. removeChild
3. replaceChild 
*/

/* var myHeading = document.querySelector('#section1 h1');
myHeading.removeAttribute('title');
*/

/* var mySongs = document.querySelector('#songs');
mySongs.removeChild(mySongs.children[1]); */

var newElement = document.createElement('li');
var myText = document.createTextNode('Another Song');
newElement.append(myText);
var mySongs = document.querySelector('#songs');
mySongs.replaceChild(newElement, mySongs.children[1]);
