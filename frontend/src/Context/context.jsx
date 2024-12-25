import React, { createContext, useState } from "react";

// Create a Context
export const Context = createContext();

// Create a Provider component
const ContextProvider = ({ children }) => {
  const [expenseHistory, setExpenseHistory] = useState([]);
  const [incomeHistory, setIncomeHistory] = useState([]);
  return (
    <Context.Provider
      value={{
        expenseHistory,
        setExpenseHistory,
        incomeHistory,
        setIncomeHistory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Exporting the Context Provider
export default ContextProvider;
