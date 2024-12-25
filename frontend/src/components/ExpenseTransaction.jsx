import React, { useContext } from "react";
import "../styles/Transaction.css";
import { Context } from "../Context/context";
function ExpenseTransaction() {
  const [expenseData, setExpenseData] = React.useState({
    title: "",
    amount: "",
    category: "Rent",
    description: "",
  });
  const { setExpenseHistory } = useContext(Context);

  function handleData(e) {
    setExpenseData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(expenseData);
    setExpenseHistory((prev) => [
      ...prev,
      {
        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        description: expenseData.description,
      },
    ]);
    setExpenseData({
      title: "",
      amount: "",
      category: "Rent",
      description: "",
    });
  }

  return (
    <div className="transaction">
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter title"
            onChange={handleData}
            required
            value={expenseData.title}
          />
        </div>
        <div>
          <input
            type="number"
            name="amount"
            id=""
            placeholder="Enter amount"
            min={0}
            onChange={handleData}
            required
            value={expenseData.amount}
          />
        </div>{" "}
        <div>
          <select
            name="category"
            id="category"
            onChange={handleData}
            value={expenseData.category}
          >
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Food & Groceries">Food & Groceries</option>
            <option value="Transport">Transport</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="Add description"
            onChange={handleData}
            value={expenseData.description}
          ></textarea>
        </div>
        <div>
          <button className="submit-red">Add expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseTransaction;
