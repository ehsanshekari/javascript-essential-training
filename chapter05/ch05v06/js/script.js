function successFn(position) {
  console.log(position);
}

function errorFn(error) {
  console.log(error);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFn, errorFn);
}
else{
  console.log('This Browser does not support geolocation!');
}