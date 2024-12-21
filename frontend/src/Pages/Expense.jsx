import React, { useContext } from "react";
import Transaction from "../components/ExpenseTransaction";
import "../styles/Expense.css";
import { Context } from "../Context/context";
function Expense() {
  const { expenseHistory, setExpenseHistory } = useContext(Context);
  console.log(expenseHistory);
  function handleFilter(index) {
    const filteredList = expenseHistory.filter((_, id) => id !== index);
    setExpenseHistory(filteredList);
  }
  // const categoryExpenseLogo = [{
  //   category:"Rent",
  //   logoName:"house",
  // }
  // {
  //   category:"Entertainment",
  //   logoName:"live_tv",
  // }{
  //   category:"Food & Groceries",
  //   logoName:"restaurant",
  // }{
  //   category:"Bills",
  //   logoName:"receipt_long",
  // }{
  //   category:"Transport",
  //   logoName:"train",
  // }
  // {
  //   category:"Other",
  //   logoName:"sell",
  // }]
  return (
    <div className="wrap-transaction">
      <div className="expense-history">
        {" "}
        <h2>Your Expense history</h2>
        <div>
          <ul>
            {expenseHistory.map((item, index) => (
              <div key={index} className="flex-expense">
                <span
                  className="material-icons close-li"
                  onClick={() => handleFilter(index)}
                >
                  close
                </span>{" "}
                <li>
                  <p> <span className="material-icons"></span> {item.title}</p>
                  <span>{item.amount}</span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Transaction />
    </div>
  );
}

export default Expense;
