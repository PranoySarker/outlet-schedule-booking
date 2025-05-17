const { createAsyncThunk } = require("@reduxjs/toolkit");

const BASE_URL = "/api/proxy/";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (formData, thunkApi) => {
    try {
      const res = await fetch("api/auth/admin/login", {
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
