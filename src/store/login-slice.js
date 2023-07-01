import { createSlice } from "@reduxjs/toolkit";

const authStateSlice = createSlice({
    name: "Auth",
    initialState: { isAuthenticated: false },
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  export default authStateSlice.reducer;