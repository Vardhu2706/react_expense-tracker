// Global State

// Importing Helpers
import React, { createContext, useReducer } from "react";

// Importing Reducer
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // Delete Transaction Action
  function deleteTransaction(id) {
    console.log(id);
    console.log("Deleting Transaction...");
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Add Transaction Action
  function addTransaction(transaction) {
    console.log(transaction);
    console.log("Adding Transaction...");
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Return
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
