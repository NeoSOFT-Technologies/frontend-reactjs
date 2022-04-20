import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import landingReducer from "./landing/slice";
import getUserDetailsReducer from "./login/slice";

const store = configureStore({
  reducer: {
    landing: landingReducer,
    getUserDetails: getUserDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
