# Redux Toolkit
The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:
"Configuring a Redux store is too complicated"
"I have to add a lot of packages to get Redux to do anything useful"
"Redux requires too much boilerplate code"
We can't solve every use case, but in the spirit of create-react-app and apollo-boost, we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code.
Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed "RTK Query". It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself.
These tools should be beneficial to all Redux users. Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.
## Installation
Using Create React App​
The recommended way to start new apps with React and Redux is by using the official Redux+JS template or Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.
## Redux + Plain JS template
`npx create-react-app my-app --template redux-typescript`

**An Existing App**
Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:
```
npm install @reduxjs/toolkit
```
## Redux Toolkit includes these APIs:
1. configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
2. createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
3. createAction(): generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.
4. createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
5. createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
6. createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.

```javascript
app/store.js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
 reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

###Provide the Redux Store to React​
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:
```index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
)
```
###Create a Redux State Slice​
Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.
Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

```javascript
features/counter/counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
 value: number
}

const initialState: CounterState = {
 value: 0,
}

export const counterSlice = createSlice({
 name: 'counter',
 initialState,
 reducers: {
   increment: (state) => {
     // Redux Toolkit allows us to write "mutating" logic in reducers. It
     // doesn't actually mutate the state because it uses the Immer library,
     // which detects changes to a "draft state" and produces a brand new
     // immutable state based off those changes
     state.value += 1
   },
   decrement: (state) => {
     state.value -= 1
   },
   incrementByAmount: (state, action: PayloadAction<number>) => {
     state.value += action.payload
   },
 },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


```