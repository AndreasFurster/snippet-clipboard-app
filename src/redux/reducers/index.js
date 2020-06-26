import { combineReducers } from "redux";
import snippets from "./snippets";
import notifications from "./notifications";
import { connectRouter } from 'connected-react-router'


export default history => combineReducers({ notifications, snippets, router: connectRouter(history) });
