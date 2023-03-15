const defaultState = {
  money: 500
}
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