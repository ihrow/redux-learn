import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addClientAction, fetchClients, removeClientAction} from "./store/clientReducer";
import {asyncDepositAction, asyncWithdrawAction, depositAction, withdrawAction} from "./store/moneyReducer";
// import {fetchCustomers} from "./asyncActions/clients";

function App() {

  const dispatch = useDispatch();
  const money = useSelector(state => state.money.money);
  const clients = useSelector(state => state.clients.clients)

  // const depositMoney = (cash) => {
  //   dispatch(depositAction(cash))
  // }

  // const withdrawMoney = (cash) => {
  //   dispatch(withdrawAction(cash))
  // }

  const addClient = name => {
    const client = {
      name,
      id: Date.now()
    }
    dispatch(addClientAction(client))
  }

  const removeClient = client => {
    dispatch(removeClientAction(client))
  }

  const removeClientByName = name => {
    const client = {
      name
    }
    removeClient(client)
  }


  return (
    <div className="container">
      <div className="bank">
        <span className="bank-money">Your money: {money}</span>
        <div className="bank-operations">
          <div className="bank-cash-operations">
            <button className="bank-operation-button deposit"
                    // onClick={() => depositMoney(Number(prompt("Enter amount: ")))}>Deposit Money
                    onClick={() => dispatch(asyncDepositAction(Number(prompt("Enter amount: "))))}>Deposit Money
            </button>
            <button className="bank-operation-button withdraw"
                    // onClick={() => withdrawMoney(Number(prompt("Enter amount: ")))}>Withdraw Money
                    onClick={() => dispatch(asyncWithdrawAction(Number(prompt("Enter amount: "))))}>Withdraw Money
            </button>
          </div>
          <div className="bank-clients-operations">
            <button className="bank-operation-button client-add" onClick={() => addClient(prompt("Enter name: "))}>Add
              Client
            </button>
            <button className="bank-operation-button client-remove"
                    onClick={() => removeClientByName(prompt("Enter name: "))}>Remove Client
            </button>
            <button className="bank-operation-button client-add"
                    // onClick={() => dispatch(fetchCustomers())}>Get client database
                    onClick={() => dispatch(fetchClients())}>Get client database
            </button>
          </div>
        </div>
        {clients.length > 0 ?
          <div className="existing-customers">
            <span style={{fontSize: "2rem", color: "white"}}>Your clients: </span>
            {clients.map(client =>
              <div onClick={() => removeClient(client)} className="bank-client" key={client.id}>{client.name}</div>
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
