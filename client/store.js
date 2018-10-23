import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk
import reducer from "./reducers/index";

export default createStore(
  reducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);
