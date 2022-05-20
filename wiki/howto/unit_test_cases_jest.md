# Why To Write Unit Test Cases for a Component
Writing unit tests for a code to make sure that the code works correctly. This helps to detect and protect against bugs in the future. If you have good unit tests coverage, you can refactor with confidence.

## How to Write Unit Test Cases for a Component 
> Note: Refer [getting_started.md](https://github.com/NeoSOFT-Technologies/frontend-reactjs/blob/main/wiki/howto/getting_started.md) inorder to know how to create a test file for a given component.<br/>

let's get an overview about how to write unit test cases with existing component from our project `login.tsx`.<br/>

After creating test file `login.test.tsx`.

`Step 1` : Import Login from `src/pages/login` parent component in `login.test.tsx` test file.
```tsx
import Login from "<path to login folder>/login/Login.tsx"
```

`Step 2` : Rendering the login page
``` tsx
it("render without crashing Loginpage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  ```
  > Note: Here we are `providing <Provider store={store}>` inside a `<BrowserRouter>` because `redux` toolkit is being used in our project. As the `router history` is managed by `Redux store` and is passed down via `ConnectedRouter`. We need to tell `react-dom` to render our application with the correct `store` and `browser history` data.

The purpose of the render function is to display the specified HTML code inside the specified HTML element. The above code helps us to render the login page.

Along with this we need to import `render` utility from `@testing-library/react` i.e
```tsx 
import { render } from "@testing-library/react";
```

`Step 3` : Firing an event with the help of screen and fireevent.

Import screen and fireevent utilities from `@testing-library/react` i.e
```tsx
import { screen, fireEvent } from "@testing-library/react";
```

> The `screen` object from the React Testing Library (RTL) provides methods for querying the rendered elements of the DOM in order to make assertions about their text content, attributes, and more. 

> `fireEvent` dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.<br/>
> 
for example, inorder to test whether the input fields(`emailbox` and `passwordbox`) are rendering & taking inputs , the following unit test code will helps us to find.
```
it("render the input fields", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const emailBox = screen.getByTestId("email-input");
  expect(emailBox).toBeInTheDocument();
  expect(emailBox).toHaveAttribute("type", "email");
  fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });
  expect(screen.getByTestId("email-input")).toHaveValue("deepthi@gmail.com");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");
  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });
  expect(screen.getByTestId("password-input")).toHaveValue("deepthi@123");
});
```

> Note: Here `getByTestId`: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).<br/>

For more queries refer to [All the queries from DOM Testing Library](https://testing-library.com/docs/react-testing-library/cheatsheet/).

When `const emailBox = screen.getByTestId("email-input");` is used it help us find the element in loginpage with `email-input` as reference.

Then we are expecting `emailBox` to be present in the document and to check whether the given element has an email attribute or not. 

> Note: `toBeInTheDocument` & `toHaveAttribute` are the custom jest matchers provided by `@testing-library/jest-dom` library
> `toBeInTheDocument` : This allows you to assert whether an element is present in the document or not.<br/>
> `toHaveAttribute` : This allows you to check whether the given element has an attribute or not. You can also optionally check that the attribute has a specific expected value or partial match using [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)/[expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
> For more information refer [custom matchers](https://github.com/testing-library/jest-dom#custom-matchers).

### Firing DOM events 
**target:** When an event is dispatched on an element, the event has the subjected element on a property called `target`. As a convenience, if you provide a `target` property in the `eventProperties`(second argument), then those properties will be assigned to the node which is receiving the event.

`fireEvent.change` creates a change event and dispatches that event on the given DOM node.

> Note: Using fireEvent. change() on a select element fires the event handler, but doesn't update state.

`fireEvent.change(emailBox, { target: { value: "deepthi@gmail.com" } });` Here attempted to change `emailbox` element and to check that different content is displayed based on what is selected.

`expect(screen.getByTestId("email-input")).toHaveValue("deepthi@gmail.com");` Here expecting whether the content is changed after he event is fired.

`Step 4` : How to run test cases and code coverage.

By using the following command we can run the test cases and also get code coverage 
```
npm run test Login.test.tsx -- --coverage --watchAll=false
```