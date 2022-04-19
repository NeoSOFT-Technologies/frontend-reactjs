import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validateUserLoginCredentials } from "../../services/login";
import { LandingPageState, LoginData } from "../../types/redux";
import error from "../../utils/error";

const initialState: LandingPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getUserDetails = createAsyncThunk(
  "login/user",
  async (credentials: LoginData) => {
    const { username, password } = credentials;
    try {
      const response = await validateUserLoginCredentials(username, password);
      console.log(response);
      return response.data;
    } catch (error_) {
      return error_;
    }
  }
);

const slice = createSlice({
  name: "user-login",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });
  },
});

export default slice.reducer;
