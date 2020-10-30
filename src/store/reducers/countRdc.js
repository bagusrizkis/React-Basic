import { ADD_DATA, REDUCE_DATA, RESET } from "../actions";

const initialState = {
  data: 0
};

export default function reducer(state = initialState, action) {
  console.log("dari User Reducer", action);

  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: state.data + action.payload };
    case REDUCE_DATA:
      return { ...state, data: state.data - action.payload };
    case RESET:
      return { ...state, data: 0 };
    default:
      return state;
  }
}
