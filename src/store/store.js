import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moneyReducer} from "./moneyReducer";
import {clientReducer} from "./clientReducer";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  money: moneyReducer,
  clients: clientReducer
})

// thunk middleware was automatically added
export const store = configureStore({
  reducer,
  middleware: [ sagaMiddleware ]
})

sagaMiddleware.run(rootWatcher)
