// NOTE: use this store variable to create a store.

import {applyMiddleware, compose, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer.js"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

