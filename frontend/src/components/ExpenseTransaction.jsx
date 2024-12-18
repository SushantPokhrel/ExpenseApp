import React from "react";
import "../styles/Transaction.css";
function Transaction() {
  return (
    <div className="transaction">
      <h3>
        Add new transaction 
      </h3>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="" placeholder="" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="" id="" placeholder="Enter amount" />
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
          <select name="category" id="category">
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
          <textarea name="description" id=""></textarea>
        </div>
        <din className="button">
          <button type="submit">Submit</button>
        </din>
      </form>
    </div>
  );
}

export default Transaction;
