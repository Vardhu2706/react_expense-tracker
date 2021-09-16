// Transaction Component

// Imports
import React, { useContext } from "react";

// Importing Global Context
import { GlobalContext } from "../context/GlobalState";

// Importing Components
import Transaction from "./Transaction";

// Functional Component
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

// Default Export
export default TransactionList;
