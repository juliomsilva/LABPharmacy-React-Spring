import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios
  .get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
