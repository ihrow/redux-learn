const defaultState = {
  clients: []
}

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state, clients: [...state.clients, action.payload]};
    case "REMOVE_CLIENT":
      return {...state, clients: state.clients.filter(customer => customer.name !== action.payload.name)};
    default:
      return state;
  }
}