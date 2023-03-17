import {createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
  money: 500,
  clients: []
}

export const deposit = createAction('DEPOSIT')
export const withdraw = createAction('WITHDRAW')

export default createReducer(initialState, {
  [deposit]: function (state) {
    state.money = state.money + 500;
  },
  [withdraw]: function (state) {
  state.money = state.money - 500;
  }
})