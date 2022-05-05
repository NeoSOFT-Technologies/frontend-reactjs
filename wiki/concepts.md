# Concepts

## 1. Component
### 1. Class Component
   
      a.constructor
      b.state and props
      c.lifecyle methods(componentDidMount,componentDidUpdate,etc)
      d.render
      e.export class component
   
### 2. Functional Component
   
      a. props
      b. useState
      c. useEffect
      d. useRef
      e. return
      f. export function component
   
## 2. React Hooks 
   
      a. useState (react)
      b. useref (react)
      c. useEffect (react)
      d. useLocation (react-router-dom)
      e. useNavigate (react-router-dom)
      f. useParams (react-router-dom)
      g. useSelector (react-redux)
      h. useDispatch (react-redux)
   

## 3. Redux

   a. actions :- ( Actions have a type field that tells what kind of action to perform and all other fields contain 
                  information or data. in "src/app/redux/actions" folder contains files with redux actions)
                  
   b. reducer :- (a reducer is a pure function that takes an action and the previous state of the application and
                  returns the new state. in "src/app/redux/reducers" contains file with reducer functions)
                  
   c. store :-    ("src/app/redux/store" contains a file in which store is created.)
   
   d. createStore :-  (a method used to create a storage space where data would be stored and provided to application)
   
   e. combineReducers :- (method used to combine multiple reducers)
   
   f. Provider  :-  (a component which works as a wrapper for other components where redux storage needs 
                     to be accessed by any component not encapsulated inside this wrapper would not be able 
                     to access redux storage.)
                     
   g. useSelector,useDispatch :-  (hooks used in function components to access and manipulate redux storage)

   h. useAppSelector,useAppDispatch :- (custom hooks created for the Project with the help of useSelector and useDispatch)
    


## 4. Redux Toolkit
The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store setup, what your state contains, and how you want to build your reducers.

## 5. React-Router-Dom

   a.BrowserRouter      (a component which works as a wrapper for other components which use routing in react)
   
   b.Routes       (a Routes component is similar to a "switch" statement in many programming languages ,    
                  it switches between components according to route path, hence it encapsulates all components 
                  which need to be switched between each other.)
                  
   c.Route         (it defines a particular path for a component to be displayed in react-dom)
   
   e.useLocation   (hook used to access location and data passed through previous component)
   
   f.useNavigate   (hook used to navigate )
   
   g.Navigate (a component used to navigate through react-dom)
   
   h.Link (a component used to navigate through react-dom)

## 6. React-Bootstrap

   a.React-Bootstrap Components     
   b.inline styling   
   c.bootstrap classes

## 7. Bootstrap 

   a.bootstrap components   
   b.bootstrap classes


## 8. Regular Expression
   
   a.create a regular expression   
   b.test data against regular
   

## 9. Axios

   a.GET,POST,PUT,DELETE requests  
   b.headers      
   c.params   
   d.query   
   e.request body

## 10.Sass

   a. preprocessing
   b. using variables
   c. nesting
   d. partials
   e. modules
   f. extend/inheritance
   g. operators
   h. mixins

## 11. React-toastify :-
   The React-Toastify package allows the developer to show toasts to display a message and piece of information to the user for a certain period of time.
## 12. Reuseable Components :- 
   (These components are like a template which can be used multiple times in our project and used with props to pass data into it.)

## 13. Environmental files :- 
   (these files are used to store sensitive data like certain tokens and PORT numbers, connection links ,etc.)
   Apart from the main env file there are further segregation such as :-
   a. env.production - Used to create the environment variables in production phase.
   b. env.staging - Used to create the environment variables in staging phase.
   c. env.test - Used to create the environment variables in Testing phase.
   d. env.development - Used to create the environment variables in Development phase, if not present it will by default use the `.env` file present. 


## NPM Modules


1. "axios": Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library 
            in a small package with a very extensible interface.<br/>
   package-link :- https://www.npmjs.com/package/axios<br/>
   docs :- https://axios-http.com/docs/intro

2. "bootstrap": Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular 
                front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful JavaScript plugins.<br/>
   package-link :- https://www.npmjs.com/package/bootstrap<br/>
   docs :- https://getbootstrap.com/docs/5.1/getting-started/introduction/<br/>

3. "compass-mixins": This is a repository to pull SASS style sheets on Bower, and enjoy the compass mixins by using libsass for faster compilation.<br/>
   package-link :- https://www.npmjs.com/package/compass-mixins<br/>
   docs :-  https://github.com/Igosuki/compass-mixins#readme<br/>

4. "node-sass": Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
                It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.<br/>
   package-link :- https://www.npmjs.com/package/node-sass<br/>
   docs :- https://github.com/sass/node-sass<br/>

5. "react": The react package contains only the functionality necessary to define React components. It is typically used together
            with a React renderer like react-dom for the web, or react-native for the native environments.<br/>
   package-link :- https://www.npmjs.com/package/react<br/>
   docs :- https://reactjs.org/<br/>

6. "react-bootstrap": React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component,
                   without unneeded dependencies like jQuery.<br/>
   package-link :- https://www.npmjs.com/package/react-bootstrap<br/>
   docs :- https://react-bootstrap.github.io/<br/>

7. "react-dom": This package serves as the entry point to the DOM and server renderers for React. 
               It is intended to be paired with the generic React package, which is shipped as react to npm.<br/>
   package-link :- https://www.npmjs.com/package/react-dom<br/>
   docs :- https://reactjs.org/<br/>

8. "react-redux": React Redux is the official React UI bindings layer for Redux. 
                  It lets your React components read data from a Redux store, and dispatch actions to the store to update state.<br/>
   package-link :- https://www.npmjs.com/package/react-redux<br/>
   docs :- https://github.com/reduxjs/react-redux, https://react-redux.js.org/<br/>

9. "react-router-dom": React Router is a fully-featured client and server-side routing library for React, 
                     a JavaScript library for building user interfaces. React Router runs anywhere React runs                     
                     on the web, on the server with node.js, and on React Native.<br/>
   package-link :- https://www.npmjs.com/package/react-router-dom<br/>
   docs :- https://github.com/remix-run/react-router#readme , https://reactrouter.com/<br/>

10. "react-scripts": This package includes scripts and configuration used by Create React App.
                     Please refer to its documentation<br/>
   package-link :- https://www.npmjs.com/package/react-scripts<br/>
   docs :- https://create-react-app.dev/<br/>

11. "react-toastify": React-Toastify allows you to add notifications to your app with ease.<br/>
   package-link :- https://www.npmjs.com/package/react-toastify<br/>
   docs :- https://github.com/fkhadra/react-toastify#readme, https://fkhadra.github.io/react-toastify/introduction/<br/>

12. "redux-toolkit": Redux Toolkit allows you to Store the data in a centralized store along with providing the middleware required for making APi Calls.<br/>
package-link :- https://www.npmjs.com/package/@reduxjs/toolkit<br/>
docs :- https://redux-toolkit.js.org/<br/>
