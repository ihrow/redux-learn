const defaultState = {
  money: 500
}

const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";
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
export const withdrawAction = payload => ({type: WITHDRAW, payload})