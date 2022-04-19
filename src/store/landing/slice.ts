import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LandingDetails } from "../../types/landing-page";
import httpclient from "../../utils/api";
import error from "../../utils/error";

interface LandingPageState {
  data?: LandingDetails | undefined;
  loading: boolean;
  error?: string | undefined;
}

const initialState: LandingPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getLandingPageDetails = createAsyncThunk(
  "landing/gerDetails",
  async () => {
    try {
      const response = await httpclient().get("/global/mock-data/landing.json");
      return response.data;
    } catch (error_) {
      return error_;
    }
  }
);

const slice = createSlice({
  name: "landing",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(getLandingPageDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLandingPageDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getLandingPageDetails.rejected, (state, action) => {
      state.loading = false;
      // action.payload contains error information
      state.error = error(action.payload);
    });
  },
});

export default slice.reducer;
