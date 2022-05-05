# Testing 
Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest. The purpose of software testing is to identify errors, gaps or missing requirements in contrast to actual requirements.

 In simple terms, Software Testing means the Verification of Application Under Test (AUT). This Software Testing course introduces testing software to the audience and justifies the importance of software testing.
 
 Command : `npm run test`
 # Testing library that are used in the console
 ```
 1. React Testing Library(default)
 2. jest
 3. axios-mock-adapter
 ```
 # React Testing Library 
 This is the default library that comes when you create an react app. The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of `react-dom` and `react-dom/test-utils`, So rather than dealing with instances of rendered React components, your tests will work with actual DOM nodes. The utilities this library provides facilitate querying the DOM in the same way the user would. Finding form elements by their label text (just like a user would), finding links and buttons from their text (like a user would). It also exposes a recommended way to find elements by a data-testid as an "escape hatch" for elements where the text content and label do not make sense or is not practical.

This library encourages your applications to be more accessible and allows you to get your tests closer to using your components the way a user will, which allows your tests to give you more confidence that your application will work when a real user uses it.
## Installation
 
 ```
 npm install --save-dev @testing-library/react
 ```
 ## usage
 function that are used while testing 
 ```
 
 1. render
 2. Queries
 3. screen
 4. fireEvent
 ```

 
 ### 1. render
  the render() method is the only required and most important method of all in-built life-cycle hooks/methods. In the render() method, we can read props and state and return our JSX code to the root component of our app.
 
 Example : 
  render `const {/* */} = render(Component) returns:` 
  - unmount function to unmount the component 
  - container reference to the DOM node where the component is mounted
  - all the queries from DOM Testing Library, bound to the document so there is no need to pass a node as the first argument (usually, you can use the screen import instead)
```js
import {render, fireEvent, screen} from '@testing-library/react'

test('loads items eventually', async () => {
  render(<Page />)

  // Click button
  fireEvent.click(screen.getByText('Load'))

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})
```
### 2. Queries

The queries returned from render in React Testing Library are the same as DOM Testing Library except they have the first argument bound to the document, so instead of `getByText(node, 'text')` you do `getByText('text')`

- ByLabelText find by label or aria-label text content
    - getByLabelText
    - queryByLabelText
    - getAllByLabelText
    - queryAllByLabelText
    - findByLabelText
    - findAllByLabelText
- ByPlaceholderText find by input placeholder value
    - getByPlaceholderText
    - queryByPlaceholderText
    - getAllByPlaceholderText
    - queryAllByPlaceholderText
    - findByPlaceholderText
    - findAllByPlaceholderText
 - ByText find by element text content
    - getByText
    - queryByText
    - getAllByText
    - queryAllByText
    - findByText
    - findAllByText
 - ByDisplayValue find by form element current value
    - getByDisplayValue
    - queryByDisplayValue
    - getAllByDisplayValue
    - queryAllByDisplayValue
    - findByDisplayValue
    - findAllByDisplayValue
- ByAltText find by img alt attribute
    - getByAltText
    - queryByAltText
    - getAllByAltText
    - queryAllByAltText
    - findByAltText
    - findAllByAltText
- ByTitle find by title attribute or svg title tag
    - getByTitle
    - queryByTitle
    - getAllByTitle
    - queryAllByTitle
    - findByTitle
    - findAllByTitle
- ByRole find by aria role
    - getByRole
    - queryByRole
    - getAllByRole
    - queryAllByRole
    - findByRole
    - findAllByRole
- ByTestId find by data-testid attribute
    - getByTestId
    - queryByTestId
    - getAllByTestId
    - queryAllByTestId
    - findByTestId
    - findAllByTestId

###  3. screen

All of the queries exported by DOM Testing Library accept a container as the first argument. Because querying the entire document.body is very common, DOM Testing Library also exports a screen object which has every query that is pre-bound to document.body (using the within functionality). Wrappers such as React Testing Library re-export screen so you can use it the same way.

Example : 

```javascript
import {render, screen} from '@testing-library/react'

render(
  <div>
    <label htmlFor="example">Example</label>
    <input id="example" />
  </div>,
)

const exampleInput = screen.getByLabelText('Example')
```

### 4. fireEvent

fireEvent is a convenent methods for firing DOM events 
```
fireEvent(node: HTMLElement, event: Event)
```

Example : 

Fire DOM events.

```js
// <button>Submit</button>
fireEvent(
  getByText(container, 'Submit'),
  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }),
)
```
[See all supported events](https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js)

# jest

Jest is an open-source testing framework built on JavaScript, designed majorly to work with React and React Native based web applications. Often, unit tests are not very useful when run on the frontend of any software. This is mostly because unit tests for the front-end require extensive, time-consuming configuration

## installation

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```
## DOM Testing

If you'd like to assert, and manipulate your rendered components you can use react-testing-library, Enzyme, or React's TestUtils. The following two examples use react-testing-library.

**react-testing-library**

You have to run `yarn add --dev @testing-library/react` to use react-testing-library.

For example Let's implement a checkbox which swaps between two labels:
### component file
---

```js
import React, {useState} from 'react';

const CheckboxWithLabel = ({labelOn, labelOff}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
```
### respective test file using jest
---

```js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
```

# axios-mock-adapter
Axios adapter that allows to easily mock requests, by mocking the actual response coming from the backend with the dummy API call

## installation

```
npm install axios-mock-adapter --save-dev
```
 Example mocking an GET request
 
 ```js
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