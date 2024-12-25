import React, { useContext, useEffect, useState } from "react";
import "../styles/Expense.css";
import { Context } from "../Context/context";
import ExpenseTransaction from "../components/ExpenseTransaction";

function Expense() {
  // Accessing expense history from the context
  const { expenseHistory } = useContext(Context);

  // Using state to track the total expense dynamically
  const [total, setTotal] = useState(0);

  // Predefined category icons for mapping
  const categoryExpenseLogo = [
    { category: "Rent", logoName: "house" },
    { category: "Entertainment", logoName: "live_tv" },
    { category: "Food & Groceries", logoName: "restaurant" },
    { category: "Bills", logoName: "receipt_long" },
    { category: "Transport", logoName: "train" },
    { category: "Other", logoName: "sell" },
  ];

  // Function to return the appropriate logo for a given category
  // If the category doesn't match, it returns a default icon (`help`)
  const returnLogo = (name) => {
    const item = categoryExpenseLogo.find((item) => item.category === name);
    return item || { logoName: "help" }; // Fallback for unmatched categories
  };

  // Effect to calculate the total expense whenever `expenseHistory` changes
  useEffect(() => {
    const calculateTotal = () => {
      // Summing up all amounts in the expense history
      const totalAmount = expenseHistory.reduce(
        (acc, val) => acc + Number(val.amount),
        0
      );
      setTotal(totalAmount); // Updating the `total` state with the calculated value
    };
    calculateTotal(); // Trigger the calculation
  }, [expenseHistory]); // Dependency ensures the effect runs only when `expenseHistory` changes

  return (
    <div className="wrap-transaction">
      <div className="expense-history">
        <h2>Expense History</h2>
        <div>
          <ul className="ul-expense">
            {/* Conditional rendering: if there are expenses, map through them; otherwise, show a message */}
            {expenseHistory.length ? (
              expenseHistory.map((item, index) => (
                <li key={index} className="flex-expense">
                  <span className="material-icons logo-history">
                    {returnLogo(item.category).logoName}
                  </span>
                  <div className="title-description-container">
                    {/* <div className="red-dot">.</div> */}
                    <div className="flex-right-history">
                      <h3 className="title">
                        <span></span>
                        {item.title}
                      </h3>
                      <p className="description">{item.description}</p>
                    </div>
                    <span className="amount">$ {item.amount}</span>
                  </div>
                </li>
              ))
            ) : (
              // Display message if no expense history is found
              <p className="no-history">No history found</p>
            )}
          </ul>
        </div>
        <div className="tot-exp-div">
          <p>
            {/* Displaying the dynamically calculated total */}
            Total Expenses: <span className="tot-exp-amt">$ {total}</span>
          </p>
        </div>
      </div>
      {/* Including the Transaction component for adding new transactions */}
      <ExpenseTransaction />
    </div>
  );
}

export default Expense;
