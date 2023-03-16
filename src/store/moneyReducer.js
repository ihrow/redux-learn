const defaultState = {
  money: 500
}

const DEPOSIT = "DEPOSIT";
export const ASYNC_DEPOSIT = "ASYNC_DEPOSIT";
const WITHDRAW = "WITHDRAW";
export const ASYNC_WITHDRAW = "ASYNC_WITHDRAW";
export const moneyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {...state, money: state.money + action.payload};
    case "WITHDRAW":
      return {...state, money: state.money - action.payload};
    default:
      return state;
  }
}

export const depositAction = payload => ({type: DEPOSIT, payload})
export const asyncDepositAction = payload => ({type: ASYNC_DEPOSIT, payload})
export const withdrawAction = payload => ({type: WITHDRAW, payload})
export const asyncWithdrawAction = payload => ({type: ASYNC_WITHDRAW, payload})