import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./Reducers";

const rootReducer = combineReducers({ taskReducer })

export const store = createStore(rootReducer,applyMiddleware(thunk))