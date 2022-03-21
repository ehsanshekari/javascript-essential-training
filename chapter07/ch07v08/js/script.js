/* axios.get('http://127.0.0.1:3000/users')
    .then(function (response) {
        console.log('Success:', response.data);
    })
    .catch(function (error) {
        console.log('Error:', error);
    });
    */

/* var user = { username: 'test2', firstname: 'test2', lastname: 'test2', isProg: false }
axios.post('http://127.0.0.1:3000/users', user)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    */


/* var config = {
    method: 'post',
    url: 'http://127.0.0.1:3000/users',
    data: {
        username: 'test',
        firstname: 'test',
        lastname: 'test',
        isProg: false
    }
};
axios(config)
    .then(function (response) {
        console.log('Success:', response);
    })
    .catch(function (error) {
        console.log('Error:', error);
    })
    */


var config = {
    method: 'get',
    url: 'http://127.0.0.1:3000/users?username=test',
    /* params:{
        username: 'test'
    }*/
};
axios(config)
    .then(function (response) {
        console.log('Success:', response.data);
    })
    .catch(function (error) {
        console.log('Error:', error);
    });