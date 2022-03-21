function sendUser(e) {
  e.preventDefault();
  e.target.disabled = true;

  var myForm = document.forms['user'];
  var username = myForm.username.value.trim();
  var firstname = myForm.firstname.value.trim();
  var lastname = myForm.lastname.value.trim();
  var isProg = myForm.isProg.checked ? true : false;

  if (username.length === 0 || firstname.length === 0 || lastname.length === 0) {
    toastr.error('Fill all requierd fields!');
    console.log('Fill all requierd fields!');
    e.target.disabled = false;
    return;
  }

  var conf = {
    method: 'post',
    url: 'http://127.0.0.1:3000/users',
    data: {
      id: 600,
      username: username,
      firstname: firstname,
      lastname: lastname,
      isProg: isProg
    }
  }

  axios(conf)
    .then(function (result) {
      e.target.disabled = false;
      toastr.success('User added successfully');
      console.log('User added successfully');
    })
    .catch(function (error) {
      e.target.disabled = false;
      toastr.error('Can not add the user');
      console.log('Can not add the user!', error.response.data, error.response.status);
    });
}