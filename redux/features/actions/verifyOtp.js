import { createAsyncThunk } from "@reduxjs/toolkit";

export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async ({ email, otp }, thunkApi) => {
    try {
      const res = await fetch("api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed (${res.status}): ${errorText}`);
      }
      const data = await res.json();

      return { email, data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
