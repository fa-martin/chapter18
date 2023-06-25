import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch(); // a function
  const currectcounter = useSelector((state) => {
    return state.counter;
  });
  const toggleCounterHandler = () => {};
  const toggleIncrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const toggleDecrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{currectcounter}</div>
      <div className={classes.button}>
        <button onClick={toggleIncrementHandler}>Increment</button>
        <button onClick={toggleDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
