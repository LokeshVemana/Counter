import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../redux/actions";
import { increment,decrement, fetchTodos } from "../ReduxToolKit/CounterSlice";
import useRandomColor from "../customHook/useRandomColor";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.CounterReducer.Counter);
  // const login =useSelector((state)=>state.CounterReducer.login)
  // const error = useSelector((state)=>state.CounterReducer.error)
  // const loading = useSelector((state)=>state.CounterReducer.loading)
  const {color,handleColorChange} =useRandomColor();
  return (
    <div style={{background:`#${color}`}}>
      <Button onClick={(()=>handleColorChange())}>Change color</Button>
      <Button onClick={() => dispatch(increment())} variant="warning">
        Increment
      </Button>
      <h1>{counter}</h1>
      <Button onClick={() => dispatch(decrement())} variant="danger">
        Decrement
      </Button>
      {/* <Button onClick={()=>dispatch(fetchTodos())} variant="success">fetchTodos</Button>
      {loading && <h1>Loading....!</h1>}
      {error && <h1>error:  {error}</h1>}
      {!error && <h1>login:Successfully{login}</h1>} */}
    </div>
  );
};

export default Counter;
