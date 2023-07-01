import { createSlice, configureStore } from "@reduxjs/toolkit";

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
      state.counter = state.counter + action.payload ;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterStateSlice.reducer,
});

export const counterAction = counterStateSlice.actions;

export default store;
