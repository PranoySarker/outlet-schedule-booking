import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://51.20.49.136:5000/v1/";

export const sendOtp = createAsyncThunk(
  "user/sendOtp",
  async (formData, thunkApi) => {
    try {
      const email = formData.email;
      const res = await fetch(`${BASE_URL}auth/forget-password/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
