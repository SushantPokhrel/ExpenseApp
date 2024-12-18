import React from "react";
import Transaction from "../components/ExpenseTransaction";
import "../styles/Expense.css";
function Expense() {
  return (
    <div className="wrap-transaction">
      <div className="expense-history">
        {" "}
        <h2>Your transaction history</h2>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ipsum tempora veritatis eius qui molestiae est, beatae sunt ex
            voluptatibus voluptas soluta eos eaque laborum quos obcaecati
            consequuntur! Ducimus, animi!
          </p>
        </div>
      </div>
      <Transaction />
    </div>
  );
}

export default Expense;
