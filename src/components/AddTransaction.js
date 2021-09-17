//  Add Transaction Component

// Imports
import React, { useState, useContext } from "react";

// Importing Global Context
import { GlobalContext } from "../context/GlobalState";

// Functional Component
const AddTransaction = () => {
  // State Variables
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Context Variable
  const { addTransaction } = useContext(GlobalContext);

  // On Submit Handler
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    // Add Transaction
    addTransaction(newTransaction);

    // Reset State Variables
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      {/* Form */}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Transaction Amount: <br /> (Negative - expense, Positive - income)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

// Default Export
export default AddTransaction;
