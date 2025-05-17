import authReducer from "./features/authSlice";
import adminReducer from "./features/adminSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
  },
});

export default store;
