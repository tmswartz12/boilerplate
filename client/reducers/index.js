//import each individual reducer
import example from "./example-reducer";
import { combineReducers } from "redux";
//https://redux.js.org/api/combinereducers

export default combineReducers({
  //add each individual reducer into combine reducer
  example
});
