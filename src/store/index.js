import { configureStore } from "@reduxjs/toolkit";
import Counter from './counter-slice';
import Auth from './login-slice';



const store = configureStore({
  reducer: { counter: Counter.reducer, auth: Auth.reducer },
});

export const counterAction = Counter.actions;
export const authAction = Auth.actions;

export default store;
