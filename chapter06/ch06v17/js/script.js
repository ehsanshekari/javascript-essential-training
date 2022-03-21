function printValues() {
   var myFrom = document.forms['register_form']; //  document.forms['register_form']
   console.log('firstname:', myFrom['firstname'].value);
   console.log('lastname:', myFrom.lastname.value);
   console.log('username:', myFrom.username.value);
   console.log('password:', myFrom.password.value);
   console.log('password2:', myFrom.password2.value);
   console.log('gender:', myFrom.gender.value);
   if (myFrom.front.checked) {
      console.log('front:', myFrom.front.value);
   }
   if (myFrom.back.checked) {
      console.log('back:', myFrom.back.value);
   }
   console.log('age:', myFrom.age.value);
   console.log('submit:', myFrom.submit.value);
   return false;
}