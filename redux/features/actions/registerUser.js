import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://51.20.49.136:5000/v1/";

export const registerUser = createAsyncThunk(
  "user/register",
  async (FormData, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}user/create`, {
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
