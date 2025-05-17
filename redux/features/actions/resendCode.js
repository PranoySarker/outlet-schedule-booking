import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/api/proxy/";

export const resendCode = createAsyncThunk(
  "user/resendCode",
  async ({ email }, thunkApi) => {
    try {
      const res = await fetch(
        `${BASE_URL}user/auth/email-verification/resend-code`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed (${res.status}): ${errorText}`);
      }
      return await res.json();
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
