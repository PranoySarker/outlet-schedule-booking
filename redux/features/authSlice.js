import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
