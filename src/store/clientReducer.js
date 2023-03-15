const defaultState = {
  customers: []
}

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state, customers: [...state.customers, action.payload]};
    case "REMOVE_CLIENT":
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
    default:
      return state;
  }
}