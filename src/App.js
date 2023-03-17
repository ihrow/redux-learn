import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addClient, addManyClients, deposit, removeClient, withdraw} from "./reduxToolkit/toolkitSlice";
import {fetchClientsToolkit} from "./reduxToolkit/fetchClientsToolkit";

function App() {

  const dispatch = useDispatch();
  const money = useSelector(state => state.toolkit.money);
  const clients = useSelector(state => state.toolkit.clients)

  const addClientByName = name => {
    const client = {
      name,
      id: Date.now()
    }
    dispatch(addClient(client))
  }

  const removeClientByName = name => {
    const client = {
      name
    }
    dispatch(removeClient(client))
  }

  return (
    <div className="container">
      <div className="bank">
        <span className="bank-money">Your money: {money}</span>
        <div className="bank-operations">
          <div className="bank-cash-operations">
            <button className="bank-operation-button deposit"
                    // onClick={() => depositMoney(Number(prompt("Enter amount: ")))}>Deposit Money
                    onClick={() => dispatch(deposit(Number(prompt("Enter amount: "))))}>Deposit Money
            </button>
            <button className="bank-operation-button withdraw"
                    // onClick={() => withdrawMoney(Number(prompt("Enter amount: ")))}>Withdraw Money
                    onClick={() => dispatch(withdraw(Number(prompt("Enter amount: "))))}>Withdraw Money
            </button>
          </div>
          <div className="bank-clients-operations">
            <button className="bank-operation-button client-add" onClick={() => addClientByName(prompt("Enter name: "))}>Add
              Client
            </button>
            <button className="bank-operation-button client-remove"
                    onClick={() => removeClientByName(prompt("Enter name: "))}>Remove Client
            </button>
            <button className="bank-operation-button client-add"
                    // onClick={() => dispatch(fetchClientsToolkit())}>Get client database
                    onClick={() => dispatch(fetchClientsToolkit())}>Get client database
            </button>
          </div>
        </div>
        {clients.length > 0 ?
          <div className="existing-customers">
            <span style={{fontSize: "2rem", color: "white"}}>Your clients: </span>
            {clients.map(client =>
              <div onClick={() => dispatch(removeClient(client))} className="bank-client" key={client.id}>{client.name}</div>
            )}
          </div>
          :
          <div className="missing-customers">
            There are currently no customers in your bank!
          </div>
        }
      </div>
    </div>
  );
}

export default App;
