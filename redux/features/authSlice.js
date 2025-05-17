import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actions/registerUser";
import { loginUser } from "./actions/loginUser";
import { sendOtp } from "./actions/sendOtp";
import { verifyOtp } from "./actions/verifyOtp";
import { resendCode } from "./actions/resendCode";
import { resetPassword } from "./actions/resetPassword";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    email: null,
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
          if (action.type === sendOtp.fulfilled.type) {
            state.email = action.payload.email;
          } else if (action.type === verifyOtp.fulfilled.type) {
            state.user = action.payload.data;
          } else {
            state.user = action.payload;
          }
        })
        .addCase(action.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    };

    addAsyncCases(registerUser);
    addAsyncCases(loginUser);
    addAsyncCases(sendOtp);
    addAsyncCases(verifyOtp);
    addAsyncCases(resendCode);
    addAsyncCases(resetPassword);
  },
});

export default authSlice.reducer;
