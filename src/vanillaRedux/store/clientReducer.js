const defaultState = {
  clients: []
}

const ADD_CLIENT = "ADD_CLIENT";
const ADD_MANY_CLIENTS = "ADD_MANY_CLIENTS";
export const FETCH_CLIENTS = "FETCH_CLIENTS";
const REMOVE_CLIENT = "REMOVE_CLIENT";

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MANY_CLIENTS" :
      return {...state, clients: [...state.clients, ...action.payload]}
    case "ADD_CLIENT":
      return {...state, clients: [...state.clients, action.payload]};
    case "REMOVE_CLIENT":
      return {...state, clients: state.clients.filter(customer => customer.name !== action.payload.name)};
    default:
      return state;
  }
}

export const addClientAction = payload => ({type: ADD_CLIENT, payload})
export const addManyClientsAction = payload => ({type: ADD_MANY_CLIENTS, payload})
export const fetchClients = () => ({type: FETCH_CLIENTS})
export const removeClientAction = payload => ({type: REMOVE_CLIENT, payload})