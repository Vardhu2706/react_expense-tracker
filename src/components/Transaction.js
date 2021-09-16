// Transaction Component

// Importing Helpers
import React, { useContext } from "react";

// Importing Global Context
import { GlobalContext } from "../context/GlobalState";

// Money Formatting Function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");

  return (
    "₹" +
    p[0]
      .split("")
      .reverse()
      .reduce((acc, num, i) => {
        return num === "-" ? acc : num + (i && !(1 % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

// Functional Component
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

// Default Export
export default Transaction;
