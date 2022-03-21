htmlElement = document.documentElement;
console.dir(htmlElement);
console.log('nodeType:', htmlElement.nodeType);
console.log('tagName:', htmlElement.tagName);
console.log('childNodes', htmlElement.childNodes);
console.log('children', htmlElement.children);
console.log('firstChild', htmlElement.firstChild);
console.log('firstElemetChild', htmlElement.firstElementChild);
console.log('lastChild', htmlElement.lastChild);
console.log('lastElemetChild', htmlElement.lastElementChild);
console.log('-----------------------------------');

headElement = htmlElement.firstChild;
console.log('parentNode', headElement.parentNode);
console.log('nextSibling', headElement.nextSibling)
console.log('previousSibling', headElement.previousSibling)
console.log('-----------------------------------');


bodyElement = headElement.nextSibling.nextSibling;
console.log('nodeType:', bodyElement.nodeType);
console.log('tagName:', bodyElement.tagName);
console.log('childNodes', bodyElement.childNodes);
console.log('children', bodyElement.children);
var bodyChildren = bodyElement.childNodes;
for (var i = 0; i < bodyChildren.length; i++) {
    if (bodyChildren[i].nodeType === 1) {
        console.log(bodyChildren[i].tagName);
    }
}
console.log('-----------------------------------');

var heading = bodyChildren[1];
console.log('childNodes', heading.childNodes);
console.log('attributes', heading.attributes)





