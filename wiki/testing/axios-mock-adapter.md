# What is Axios-Mock-Adapter: 
Axios adapter that allows to easily mock requests. <br/>
> Axios is a JavaScript library that provides a simple interface to send HTTP requests to an API. Besides, it also provides the ability to Mock these endpoints to ease frontend development.<br/>

## Why Mock APIs with Axios?
There are a few significant advantages, including:
- The ability to Unit Test the frontend.
- Developing frontend and backend with the least dependence.
- Less iteration time (thus better developer experience) for frontend developers.

# Installation
Using npm:

> `$ npm install axios-mock-adapter --save-dev` <br/>

axios-mock-adapter works on Node as well as in a browser, it works with axios v0.9.0 and above.
> Then, you need to create an Axios instance and pass it to the Axio adapter.
```
import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMockInstance = axios.create();

export const axiosMockAdapterInstance= new 
AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });

export default axiosMockInstance;
```
You can see that both the Mock Adapter and Axios Mock instance are exported in the above code. Each of them serves a different purpose.

- Axios Mock Adapter Instance — This is used to define the Mock request handling code to define the Mock data.
- Axios Mock Instance — This is used within React to invoke the API as a typical Axios instance.

## Example 
Mocking a `GET` request
```
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

axios.get("/users").then(function (response) {
  console.log(response.data);
});
```

Mocking a `GET` request with specific parameters

```
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

axios
  .get("/users", { params: { searchText: "John" } })
  .then(function (response) {
    console.log(response.data);
  });
```

When using `params`, you must match all key/value pairs passed to that option.

To add a delay to responses, specify a delay amount (in milliseconds) when instantiating the adapter

```
// All requests using this instance will have a 2 seconds delay:
var mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });
```

You can restore the original adapter (which will remove the mocking behavior)

```js
mock.restore();
```

You can also reset the registered mock handlers with `resetHandlers`

```js
mock.resetHandlers();
```

You can reset both registered mock handlers and history items with `reset`

```js
mock.reset();
```

`reset` is different from `restore` in that `restore` removes the mocking from the axios instance completely,
whereas `reset` only removes all mock handlers that were added with onGet, onPost, etc. but leaves the mocking in place.

Passing a function to `reply`

```
mock.onGet("/users").reply(function (config) {
  // `config` is the axios config and contains things like the url

  // return an array in the form of [status, data, headers]
  return [
    200,
    {
      users: [{ id: 1, name: "John Smith" }],
    },
  ];
});
```
Passing a function to `reply` that returns an axios request, essentially mocking a redirect
```
mock.onPost("/foo").reply(function (config) {
  return axios.get("/bar");
});
```
Specify no path to match by verb alone
```
// Reject all POST requests with HTTP 500
mock.onPost().reply(500);
```
Changing is also supported
```
mock.onGet("/users").reply(200, users).onGet("/posts").reply(200, posts);
```

`.replyOnce()` can be used to let the mock only reply once
```
mock
  .onGet("/users")
  .replyOnce(200, users) // After the first request to /users, this handler is removed
  .onGet("/users")
  .replyOnce(500); // The second request to /users will have status code 500
// Any following request would return a 404 since there are
// no matching handlers left
```

## History
The `history` property allows you to enumerate existing axios request objects. The property is an object of verb keys referencing arrays of request objects.<br/>
This is useful for testing.
```
describe("Feature", () => {
  it("requests an endpoint", (done) => {
    var mock = new AxiosMockAdapter(axios);
    mock.onPost("/endpoint").replyOnce(200);

    feature
      .request()
      .then(() => {
        expect(mock.history.post.length).toBe(1);
        expect(mock.history.post[0].data).toBe(JSON.stringify({ foo: "bar" }));
      })
      .then(done)
      .catch(done.fail);
  });
});
```
You can clear the history with `resetHistory`
```js
mock.resetHistory();
```