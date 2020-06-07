import { combineReducers } from "redux";
import snippets from "./snippets";
import { connectRouter } from 'connected-react-router'


export default history => combineReducers({ snippets, router: connectRouter(history) });
