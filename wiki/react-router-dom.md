# react-router-dom

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
**Note: **If you’ve previously installed create-react-app globally via npm, directly use the command below:
### Installation
React Router can be installed via npm in your React application. Follow the steps given below to install Router in your React application:
- Step 1: cd into your project directory i.e geeks.
- Step 2: To install the React Router use the following command:

`npm install – -save react-router-dom`
 
After installing react-router-dom, add its components to your React application.
Adding React Router Components: The main Components of React Router are:
**BrowserRouter:** BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.

**Routes:** It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
Relative s and s
Routes are chosen based on the best match instead of being traversed in order.
 
**Route:** Route is the conditionally shown component that renders some UI when its path matches the current URL.

**Link:** Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

To add React Router components in your application, open your project directory in the editor you use and go to app.js file. Now, add the below given code in app.js.
It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
```javascript
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
```

**Note:** BrowserRouter is aliased as Router.

Using React Router: To use React Router, let us first create few components in the react application. In your project directory, create a folder named component inside the src folder and now add 3 files named home.js, about.js and contact.js to the component folder.