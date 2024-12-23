import React, { useContext, useRef } from "react";
import Transaction from "../components/ExpenseTransaction";
import "../styles/Expense.css";
import { Context } from "../Context/context";
function Expense() {
  const { expenseHistory, setExpenseHistory } = useContext(Context);
  const total = useRef(0);
  console.log(expenseHistory);

  const categoryExpenseLogo = [
    {
      category: "Rent",
      logoName: "house",
    },
    {
      category: "Entertainment",
      logoName: "live_tv",
    },
    {
      category: "Food & Groceries",
      logoName: "restaurant",
    },
    {
      category: "Bills",
      logoName: "receipt_long",
    },
    {
      category: "Transport",
      logoName: "train",
    },
    {
      category: "Other",
      logoName: "sell",
    },
  ];
  function returnLogo(name) {
    const item = categoryExpenseLogo.find((item) => item.category === name);
    console.log(item);
    return item;
  }

  function calcTotal() {
    total.current = expenseHistory.reduce((acc, val) => {
      return acc + Number(val.amount);
    }, 0);
  }
  React.useEffect(() => {
    calcTotal();
  }, [expenseHistory]);
  return (
    <div className="wrap-transaction">
      <div className="expense-history">
        {" "}
        <h2>Expense history</h2>
        <div>
          <ul>
            {expenseHistory.length ? (
              expenseHistory.map((item, index) => (
                <div key={index} className="flex-expense">
                  <li>
                    <p>
                      <span className="material-icons logo-category">
                        {returnLogo(item.category)?.logoName}
                      </span>{" "}
                      {item.title}
                    </p>
                    <span className="amount-expense">$ {item.amount}</span>
                  </li>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No history found</p>
            )}
          </ul>
        </div>
        <div className="tot-exp-container">
          <p style={{ textAlign: "center" }}>
            total expense: <span className="tot-exp">{total.current}</span>
          </p>
        </div>
      </div>
      <Transaction />
    </div>
  );
}

export default Expense;
