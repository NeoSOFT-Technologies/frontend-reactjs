### redux-mock-store
###Installation


`$ npm i redux-mock-store`
A mock store for testing Redux async action creators and middleware. The mock store will create an array of dispatched actions which serve as an action log for tests.

**Please note** that this library is designed to test the action-related logic, not the reducer-related one. In other words, it does not update the Redux store. If you want a complex test combining actions and reducers together, take a look at other libraries (e.g., redux-actions-assertions).
###Usage
**Synchronous actions**
The simplest usecase is for synchronous actions. In this example, we will test if the addTodo action returns the right payload. redux-mock-store saves all the dispatched actions inside the store instance. You can get all the actions by calling store.getActions(). Finally, you can use any assertion library to test the payload.

```javascript
import configureStore from 'redux-mock-store' //ES6 modules
const { configureStore } = require('redux-mock-store') //CommonJS
 
const middlewares = []
const mockStore = configureStore(middlewares)
 
// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' })
 
it('should dispatch action', () => {
 
  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(addTodo())
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_TODO' }
  expect(actions).toEqual([expectedPayload])
})
```
**Asynchronous actions**
A common usecase for an asynchronous action is a HTTP request to a server. In order to test those types of actions, you will need to call store.getActions() at the end of the request.

```javascript
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
 
const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
 
// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}
 
function fetchData () {
  return dispatch => {
    return fetch('/users.json') // Some async action with promise
      .then(() => dispatch(success()))
  };
}
 
it('should execute fetch data', () => {
  const store = mockStore({})
 
  // Return the promise
  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})
```
**API**
```javascript
configureStore(middlewares?: Array) => mockStore: Function
Configure mock store by applying the middlewares.

mockStore(getState?: Object,Function) => store: Function
Returns an instance of the configured mock store. If you want to reset your store after every test, you should call this function.

store.dispatch(action) => action
Dispatches an action through the mock store. The action will be stored in an array inside the instance and executed.

store.getState() => state: Object
Returns the state of the mock store.

store.getActions() => actions: Array
Returns the actions of the mock store.

store.clearActions()
Clears the stored actions.

store.subscribe(callback: Function) => unsubscribe: Function
Subscribe to the store.

store.replaceReducer(nextReducer: Function)
```