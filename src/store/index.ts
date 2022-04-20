import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import landingReducer from "./landing/slice";
import loginReducer from "./login/slice";

const store = configureStore({
  reducer: {
    landing: landingReducer,
    login: loginReducer,
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
