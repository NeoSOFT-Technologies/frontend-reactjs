# How To Write Test Case For Redux Toolkit Slice
> Note: Refer [getting_started.md](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/howto/getting_started.md) inorder to know how to create a test file for a given component.<br/>

let's get an overview about how to write unit test cases with existing redux slice file from our project `slice.tsx` in `src/store/login` folder.<br/>

After creating test file `slice.test.tsx`.

`Step 1` : Install axios-mock-adapter package.
```
$ npm install axios-mock-adapter --save-dev
```

`Step 2` : Create a `testconfig.ts` file in `src/resources` folder as shown below,
```
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export default new MockAdapter(axios);
```

`Step 3` : Import `mockApi` from `src/resources/testconfig.ts` testconfig file. Also import store from `src/store/index.ts` index file in `slice.test.tsx` test file. 
```
import mockApi from "../../resources/testconfig";
import store from "../index";
``` 
> Note: Here the importance of importing store is that we are creating all the reducer functions inside it. 

`Step 4`: Whenever there is a request on the URL, firstly we test calling state of Login by passing the url with 200 response and then by using dispatch function we'll check whether the conditions are satisfied. Once the conditions are fulfilled then the required assertion satetments will be checked.

Then we test that it should give an error with 404 response, if there is any request on the URL, we pass the 404 response and then by using dispatch function we'll check to state them as an Incorrect Credentials.
```
test("calling the state of login", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(200, {});
  const state = store.getState().login;

  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
  if (state.loading === false) {
    expect(state.data).toBeUndefined();
    expect(state.error).toBeUndefined();
  }
  if (state.loading === true) {
    console.log(state.loading === true);
  }
});

test("should give an error", async () => {
  mockApi.onGet("/global/mock-data/loginCredentials.json").reply(404);
  const state = store.getState().login;
  await store.dispatch(
    getUserDetails({
      username: "deepthi",
      password: "",
    })
  );
  if (state.loading === false) {
    expect("Incorrect Credentials");
  }
});
```

According to Login slice file from `src/store/login` folder the conditions were
- if the api call returned the `pending state` then the loading state must be true and data, error state must be undefined, if returned the `success state` then the loading state must be false and data should be defined or if returned the `rejected state` then the loading state must be false and error state should be an action message as string.

Based on the above conditions the test file also using the same conditions. 

`Step 5` : How to run test cases and code coverage.

By using the following command we can run the test cases and also get code coverage 
```
npm run test slice.test.tsx -- --coverage --watchAll=false
```