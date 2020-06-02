import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const middlewares = [thunk];


export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
