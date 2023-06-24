import { createStore } from "redux";

const reduxFunction = (
  state = {
    counter: 0,
  },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(reduxFunction);
export default store;