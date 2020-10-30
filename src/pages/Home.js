import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, reduceData, reset } from "../store/actions/countAct";

export default function () {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  const addOne = () => {
    dispatch(addData(1));
  };

  const reduceOne = () => {
    dispatch(reduceData(1));
  };

  const addThree = () => {
    dispatch(addData(3));
  };

  const reduceThree = () => {
    dispatch(reduceData(3));
  };

  const resetNumber = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>Ini dari page Home</h1>
      <h2>{data}</h2>
      <button onClick={addOne}>Add 1</button>
      <button onClick={reduceOne}>Reduce 1</button>
      <button onClick={addThree}>Add 3</button>
      <button onClick={reduceThree}>Reduce 3</button>
      <button onClick={resetNumber}>Reset</button>
    </>
  );
}
