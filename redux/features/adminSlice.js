import { loginAdmin } from "./actions/loginAdmin";

const { createSlice } = require("@reduxjs/toolkit");

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const addAsyncCases = (action, isLogout = false) => {
      builder
        .addCase(action.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(action.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(action.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    };

    addAsyncCases(loginAdmin);
  },
});

export default adminSlice.reducer;
