import { ADD_DATA, REDUCE_DATA, RESET } from ".";

export const addData = (number) => {
  return {
    type: ADD_DATA,
    payload: number
  };
};

export const reduceData = (number) => {
  return {
    type: REDUCE_DATA,
    payload: number
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};
