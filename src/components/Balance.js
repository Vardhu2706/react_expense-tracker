// Balance Component

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
const Balance = () => {
  // Context Variable
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};

// Default Export
export default Balance;
