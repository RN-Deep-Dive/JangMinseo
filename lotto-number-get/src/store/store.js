import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { lottoNumberReducers } from "../reducers/lottoNumber";
import logger from "redux-logger";

const rootReducer = combineReducers({
    numbers:lottoNumberReducers
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;