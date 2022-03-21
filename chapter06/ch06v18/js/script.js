function validateForm() {
   var myForm = document.forms['register_form']; //  document.forms['register_form']
   var username = myForm.username.value;
   var pass1 = myForm.pass1.value;
   var pass2 = myForm.pass2.value;
   var age = myForm.age.value;
   var errors = [];

   console.log(username, pass1, pass2, age);

   if (username.length < 3) {
      errors.push('Username must be at least 3 characters!');
   }

   if (pass1.length === 0 || (pass1 !== pass2)) {
      errors.push('Passwords are not the same!');
   }

   if (age.length === 0 || !Number(age) || age.indexOf('.') !== -1) {
      errors.push('Age is not correct!');
   }

   if (errors.length > 0) {
      console.log(errors)
      var list = makeUL(errors);
      document.body.appendChild(list);
   }
   else {
      myForm.submit();
      // Ajax
   }

   return false;
}

function makeUL(array) {
   // Create the list element:
   var list = document.createElement('ul');
   list.classList.add('error');

   for (var i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement('li');

      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));

      // Add it to the list:
      list.appendChild(item);
   }

   // Finally, return the constructed list:
   return list;
}
