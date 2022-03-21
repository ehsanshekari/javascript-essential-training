function loadFunction(){
   alert('Page is loaded!')
}

var myForm = document.form1;
var textArea1 = myForm.textarea1;
var textArea2 = myForm.textarea2;
var btnClear = myForm.button1;

function displayEvent(e) {
   var message = textArea2.value;
   message = message + e.type + "\n";
   textArea2.value = message;
}

function clearEventLog(e) {
   textArea2.value = "";
}

textArea1.addEventListener("keydown", displayEvent);
textArea1.addEventListener("keypress", displayEvent);
textArea1.addEventListener("keyup", displayEvent);

btnClear.addEventListener("click", clearEventLog);