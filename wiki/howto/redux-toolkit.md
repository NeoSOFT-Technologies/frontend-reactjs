# Learn How To Use Redux Toolkit To Manage State In React

The **Redux Toolkit** package is intended to be the standard way to write [Redux](https://redux.js.org) logic. It was originally created to help address these common issues of Redux:
-   Configuring a Redux store is too complicated
-   have to add a lot of packages to get Redux to do anything useful
-   Requires too much boilerplate code

Learn more about redux toolkit [here](https://redux-toolkit.js.org/introduction/getting-started)

## Follow the following steps to setup a redux toolkit slice for your component :-
#### `Step 1` :- Create a folder in `frontend-reactjs/src/store/` and add 
```
📂 myslice
|- 📝 slice.tsx
|- 📝 slice.test.tsx
```
#### `Step 2` :- Create the slice using [`createSlice`](https://redux-toolkit.js.org/api/createSlice) function and add the `initial state`, `slice name` and `reducers`

e.g.

```js
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	data?: string | null;
	loading: boolean;
	error?: string | null;
}

const initialState: IInitialState = {
	data: undefined,
	loading: false,
	error: undefined,
};

const slice = createSlice({
	name: "my_slice_name",
	initialState,
	reducers: {
		//reducer logic here
	},
});

export default slice.reducer;
```

**Note** - Incase if you are making an api call from redux state management then create a function using [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) whick makes the api call and add [`extraReducers`](https://redux-toolkit.js.org/api/createSlice#extrareducers) in [`createSlice`](https://redux-toolkit.js.org/api/createSlice) function.
e.g.
```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../../services";
import error from "../../utils/error";

...
...

export const getCall = createAsyncThunk(
	"getCall/getDetails",
	async () => {
		try {
			const response = await getData();
			return response.data;
		} catch (error_) {
			throw new Error(error(error_));
		}
	}
);

const slice = createSlice({
	...
	...
	extraReducers(builder): void {
		builder.addCase(getCall.pending, (state) => {
			state.loading = true;
			state.error = undefined;
		});
		builder.addCase(getCall.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(getCalls.rejected, (state, action) => {
			state.loading = false;
			state.error = error(action.payload);
		});
	},
});

...
...
```

#### `Step 3` :- Adding the slice in the store index at `frontend-reactjs/src/store/index.ts `
```js
//import
import mysliceReducer from "./myslice/slice";

const store = configureStore({
	reducer: {
		demoPage: mysliceReducer , // your reducer added here
		.
		.
		.
		.
	},
});
```
Voila🥳🥳🥳...You have implemented the redux management state for your component.

**Note** - Now write the test cases for your slice in `slice.test.tsx`. For writing testcase refer to `testing.md` in `wiki`.


