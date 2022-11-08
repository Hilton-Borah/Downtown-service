// NOTE: use this store variable to create a store.

import {applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer.js"

export const store = legacy_createStore(reducer,applyMiddleware(thunk));

