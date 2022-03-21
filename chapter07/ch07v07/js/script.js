/*
 XMLHttpRequest: 1.Sync 2.Async
 
 1. Create an Object
 2. Call open function: method, url, Sync | Async
 3. Send the request with needed data
 4. Check the status for success or error

 UNSENT = 0; // initial state
 OPENED = 1; // open called
 HEADERS_RECEIVED = 2; // response headers received
 LOADING = 3; // response is loading (a data packed is received)
 DONE = 4; // request complete
*/

// GET
/* var request = new XMLHttpRequest();
function stateChange(){
  if(request.readyState === 4){
    if(request.status === 200){
      console.log('Success', JSON.parse(request.responseText));
    }
    else{
      console.log('Error', request.responseText);
    }
  }
}
request.open('GET', 'http://127.0.0.1:3000/users', true);
request.onreadystatechange = stateChange;
request.send(null);
*/

// POST
var user = {username:'test', firstname: 'test', lastname:'test', isProg: false}
var request = new XMLHttpRequest();
function stateChange(){
  if(request.readyState === 4){
    if(request.status === 201){
      console.log('Success', JSON.parse(request.responseText));
    }
    else{
      console.log('Error', request.responseText);
    }
  }
}
request.open('POST', 'http://127.0.0.1:3000/users', true);
request.setRequestHeader('Content-Type', 'application/json');
request.onreadystatechange = stateChange;
request.send(JSON.stringify(user));