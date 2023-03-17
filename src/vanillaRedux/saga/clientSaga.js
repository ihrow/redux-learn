import { put, takeEvery, call } from 'redux-saga/effects'
import {fetchCustomers} from "../asyncActions/clients";
import {addManyClientsAction, FETCH_CLIENTS} from "../store/clientReducer";


const fetchClients = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')


function* fetchClientsWorker() {
  const response = yield call(fetchClients)
  const clients = yield call([response, response.json])
  yield put(addManyClientsAction(clients))
}

export function* clientWatcher() {
  yield takeEvery(FETCH_CLIENTS, fetchClientsWorker)
}