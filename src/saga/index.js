import { all } from 'redux-saga/effects';
import {clientWatcher} from "./clientSaga";
import {moneyWatcher} from "./moneySaga";

export function* rootWatcher() {
  yield all([clientWatcher(), moneyWatcher()])
}