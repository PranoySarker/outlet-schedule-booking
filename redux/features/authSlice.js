import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actions/registerUser";
import { loginUser } from "./actions/loginUser";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const addAsyncCases = (action, isLogout = false) => {
      builder
        .addCase(action.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(action.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(action.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    };

    addAsyncCases(registerUser);
    addAsyncCases(loginUser);
  },
});

export default authSlice.reducer;
