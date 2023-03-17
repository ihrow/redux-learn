import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    money: 500,
    clients: []
  },
  reducers: {
    deposit(state, action) {
      state.money = state.money + action.payload
    },
    withdraw(state, action) {
      state.money = state.money - action.payload
    },
    addClient(state, action) {
      state.clients.push(action.payload)
    },
    removeClient(state, action) {
      state.clients = state.clients.filter(client => client.name !== action.payload.name)
    },
    addManyClients(state, action) {
      console.log(action.payload)
      state.clients = [...state.clients, ...action.payload]
    }
  }
})

export default toolkitSlice.reducer
export const {deposit, withdraw, addClient, removeClient, addManyClients} = toolkitSlice.actions