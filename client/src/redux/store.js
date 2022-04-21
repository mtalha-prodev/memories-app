import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

export default createStore(reducer, compose(applyMiddleware(thunk)));
