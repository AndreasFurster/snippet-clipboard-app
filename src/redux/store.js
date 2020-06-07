import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const middlewares = [thunk, promise, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

export default createStore(createRootReducer(history), {}, applyMiddleware(...middlewares));
