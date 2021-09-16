// App

// Importing Helpers
import "./App.css";

// Importing Components
import Header from "./components/Header.js";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

//Importing Styles
import "./App.css";

// Functional Component
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

// Default Export
export default App;
