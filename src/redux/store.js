import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

const middlewared = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewared));

export default store;
