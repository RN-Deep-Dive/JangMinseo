import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "../reducer/count";
import logger from "redux-logger";

const rootReducer = combineReducers({
    count: countReducer,
    // reducer를 하나로 합친다. 하나씩 추가 . . .
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;