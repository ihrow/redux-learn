import { put, takeEvery } from 'redux-saga/effects'
import {ASYNC_DEPOSIT, depositAction, ASYNC_WITHDRAW, withdrawAction} from "../store/moneyReducer";

const delay = ms => {
  return new Promise(res => setTimeout(res, ms))
}

function* depositWorker(payload) {
  yield delay(1000)
  yield put(depositAction(payload.payload))
}

function* withdrawWorker(payload) {
  yield delay(1000)
  yield put(withdrawAction(payload.payload))
}

export function* moneyWatcher() {
  yield takeEvery(ASYNC_DEPOSIT, depositWorker)
  yield takeEvery(ASYNC_WITHDRAW, withdrawWorker)
}