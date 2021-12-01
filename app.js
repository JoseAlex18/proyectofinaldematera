const request = require('postman-request');
request('https://jsonplaceholder.typicode.com/users/2', function (error, response, body) {
    datos={date:'20211125',
  payment:3000,
  tax:480,
  customer_rfc:'AAXX001212HJ7',
  productos:[
   {product_id:2, quantity:5, cost:100},

   {product_id:12, quantity:10, cost:200},


   {product_id:20, quantity:10, cost:50} ]
  }
  console.log('body:', algo.Total); 
});