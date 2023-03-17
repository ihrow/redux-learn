import {addManyClients} from "./toolkitSlice";

export const fetchClientsToolkit = () => {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addManyClients(json)));
  }
}