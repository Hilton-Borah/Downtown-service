// NOTE: use this store variable to create a store.

import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Authreducer/reducer";
import { ProductReducer } from "./productReducer/reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({AuthReducer,ProductReducer})
export const store = legacy_createStore(rootReducer ,composeEnhancers(applyMiddleware(thunk)))
// export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));



