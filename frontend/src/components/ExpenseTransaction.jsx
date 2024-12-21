import React, { useContext } from "react";
import "../styles/Transaction.css";
import { Context } from "../Context/context";
function Transaction() {
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
      },
    ]);
  }

  return (
    <div className="transaction">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter title"
            onChange={handleData}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id=""
            placeholder="Enter amount"
            min={0}
            onChange={handleData}
            required
          />
        </div>{" "}
        <div>
          <label htmlFor="">Select Type</label>
          <select name="category" id="category">
            <option value="Other">Income</option>
            <option value="Other">Expence</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Select Category</label>
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
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="optional"
            onChange={handleData}
          ></textarea>
        </div>
        <div>
          <button>Add transaction</button>
        </div>
        <din className="button">
          <button type="submit">Submit</button>
        </din>
      </form>
    </div>
  );
}

export default Transaction;
