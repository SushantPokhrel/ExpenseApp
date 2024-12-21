import React, { createContext, useState } from "react";

// Create a Context
export const Context = createContext();

// Create a Provider component
const ContextProvider = ({ children }) => {
  const [expenseHistory, setExpenseHistory] = useState([]);

  return (
    <Context.Provider value={{ expenseHistory, setExpenseHistory }}>
      {children}
    </Context.Provider>
  );
};

// Exporting the Context Provider
export default ContextProvider;
