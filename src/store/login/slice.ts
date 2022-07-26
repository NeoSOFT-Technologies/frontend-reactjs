import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginHttpClient from "../../services/login/login";
import { LoginData, LoginPageState } from "../../types/redux";
import ErrorHandler from "../error-handler";
interface ILoginDataConditions {
  username: string;
  password: string;
}
const initialState: LoginPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};
const errorHandler = new ErrorHandler();

export const getUserDetails = createAsyncThunk(
  "login/user",
  async (credentials: ILoginDataConditions) => {
    const { username, password } = credentials;
    try {
      const response = await LoginHttpClient.loginresponse();
      if (response?.username !== username || response?.password !== password) {
        throw new Error("Incorrect Credentials");
      }
      return response;
    } catch (_error: any) {
      const errorMessage = errorHandler.handler(_error);
      throw new Error(errorMessage);
    }
  }
);

const slice = createSlice({
  name: "user-login",
  initialState,
  reducers: {
    resetUserLogin: (state) => {
      state.loading = false;
      state.data = undefined;
      state.error = undefined;
      localStorage.clear();
    },
  },
  extraReducers(builder): void {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("username", JSON.stringify(action.payload.username));
      state.data = action.payload as LoginData;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});
export const { resetUserLogin } = slice.actions;
export default slice.reducer;
