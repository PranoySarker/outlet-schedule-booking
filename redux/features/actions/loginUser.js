import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/api/proxy/";

export const loginUser = createAsyncThunk(
  "user/login",
  async (formData, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
