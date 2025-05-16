import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://51.20.49.136:5000/v1/";

export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async ({ email, otp }, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error("OTP verification error:", errorText);
        throw new Error(`Failed (${res.status}): ${errorText}`);
      }
      const data = await res.json();

      return { email, data };
    } catch (error) {
      console.error("OTP verification failed:", error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
