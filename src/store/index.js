import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const counterStateSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    showCounter: true,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterStateSlice.reducer, auth: authStateSlice.reducer },
});

export const counterAction = counterStateSlice.actions;
export const authAction = authStateSlice.actions;

export default store;
