import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/api/proxy/";

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
        throw new Error(`Failed (${res.status}): ${errorText}`);
      }
      const data = await res.json();

      return { email, data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
