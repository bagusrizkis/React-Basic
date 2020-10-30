import { createStore } from "redux";
import countRdc from "./reducers/countRdc";

const store = createStore(countRdc);

export default store;
