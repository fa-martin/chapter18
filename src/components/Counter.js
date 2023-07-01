import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {counterAction} from '../store/index';

const Counter = () => {
  const dispatch = useDispatch(); // a function
  
  const currectcounter = useSelector((state) => {
    return state.counter.counter;
  });
  
  const currectToggle = useSelector((state) => {
    return state.counter.showCounter;
  });
 
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };
  const toggleIncrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const toggleIncrease = ()=>{
    dispatch(counterAction.increse(5));
  }
  const toggleDecrementHandler = () => {
    dispatch( counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {currectToggle && <div className={classes.value}>{currectcounter}</div>}
      <div className={classes.button}>
        <button onClick={toggleIncrementHandler}>Increment</button>
        <button onClick={toggleIncrease}>Increase by 5</button>
        <button onClick={toggleDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
