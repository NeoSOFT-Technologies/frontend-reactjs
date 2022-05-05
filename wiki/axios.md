# What is Axios:
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic which means it can run in the browser and nodejs with the same codebase. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
## Features

  1. Make XMLHttpRequests from the browser
  2. Make http requests from node.js
  3. Supports the Promise API
  4. Intercept request and response
  5. Transform request and response data
  6. Cancel requests
  7. Automatic transforms for JSON data
  8. Client side support for protecting against XSRF
  9. Installing

# usage
  Using npm:
  `npm install axios`
  
Using bower:
 `bower install axios`
 
Using yarn:
 `yarn add axios`
 
Using jsDelivr CDN:
`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

Using unpkg CDN:
`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

## Example
A little example of using axios

`Note: CommonJS usage In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach: 55const axios = require('axios').default; // axios.<method> will now provide autocomplete and parameter typings`

### Performing a GET request
```javascript
const axios = require('axios'); // Make a request for a user with a given ID axios.get('/user?ID=12345') 
.then(function (response) { // handle success console.log(response); }) 
.catch(function (error) { // handle error console.log(error); }) 
.then(function () { // always executed });
// Optionally the request above could also be done as 
axios.get('/user', { params: { ID: 12345 } }) 
.then(function (response) { console.log(response); }) 
.catch(function (error) { console.log(error); }) 
.then(function () { // always executed }); // Want to use async/await? Add the `async` keyword to your outer function/method. 
async function getUser() { 
try { const response = await axios.get('/user?ID=12345'); 
console.log(response); } 
catch (error) { console.error(error); } }
```
`NOTE: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.`