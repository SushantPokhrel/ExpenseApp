import React, { useContext, useEffect, useState } from "react";
import Transaction from "../components/ExpenseTransaction";
import "../styles/Expense.css";
import { Context } from "../Context/context";
import IncomeTransaction from "../components/IncomeTransaction";

function Expense() {
  // Accessing expense history from the context
  const { incomeHistory } = useContext(Context);

  // Using state to track the total expense dynamically
  const [total, setTotal] = useState(0);

  // Predefined category icons for mapping
  const categoryIncomeLogo = [
    { category: "Youtube", logoName: "smart_display" },
    { category: "Bitcoin", logoName: "currency_bitcoin" },
    { category: "Salary", logoName: "credit_card" },
    { category: "Bank transfer", logoName: "account_balance" },
    { category: "Freelancing", logoName: "account_balance_wallet" },
    { category: "Other", logoName: "sell" },
  ];

  // Function to return the appropriate logo for a given category
  // If the category doesn't match, it returns a default icon (`help`)
  const returnLogo = (name) => {
    const item = categoryIncomeLogo.find((item) => item.category === name);
    return item || { logoName: "help" }; // Fallback for unmatched categories
  };

  // Effect to calculate the total expense whenever `expenseHistory` changes
  useEffect(() => {
    const calculateTotal = () => {
      // Summing up all amounts in the expense history
      const totalAmount = incomeHistory.reduce(
        (acc, val) => acc + Number(val.amount),
        0
      );
      setTotal(totalAmount); // Updating the `total` state with the calculated value
    };
    calculateTotal(); // Trigger the calculation
  }, [incomeHistory]); // Dependency ensures the effect runs only when `incomeHistory` changes

  return (
    <div className="wrap-transaction">
      <div className="expense-history">
        <h2>Income History</h2>
        <div>
          <ul className="ul-expense">
            {/* Conditional rendering: if there are expenses, map through them; otherwise, show a message */}
            {incomeHistory.length ? (
              incomeHistory.map((item, index) => (
                <li key={index} className="flex-expense">
                  <span className="material-icons logo-history">
                    {returnLogo(item.category).logoName}
                  </span>
                  <div className="title-description-container">
                    {/* <div className="red-dot">.</div> */}
                    <div className="flex-right-history">
                      <h3 className="title">
                        <span class="green-dot"></span>
                        {item.title}
                      </h3>
                      <p className="description">{item.description}</p>
                    </div>
                    <span className="amount amt-green">$ {item.amount}</span>
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
            Total Income: <span className="tot-exp-amt tot-exp-amt-green">$ {total}</span>
          </p>
        </div>
      </div>
      {/* Including the Transaction component for adding new transactions */}
      <IncomeTransaction />
    </div>
  );
}

export default Expense;
