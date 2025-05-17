const { createAsyncThunk } = require("@reduxjs/toolkit");

const BASE_URL = "/api/proxy/";

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (FormData, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed (${res.status}): ${errorText}`);
      }
      return await res.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
