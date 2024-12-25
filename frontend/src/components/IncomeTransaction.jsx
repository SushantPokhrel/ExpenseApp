import React, { useContext } from "react";
import "../styles/Transaction.css";
import { Context } from "../Context/context";

function IncomeTransaction() {
  const [incomeData, setIncomeData] = React.useState({
    title: "",
    amount: "",
    category: "Freelancing",
    description: "",
  });
  const { setIncomeHistory } = useContext(Context);

  function handleData(e) {
    setIncomeData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(incomeData);
    setIncomeHistory((prev) => [
      ...prev,
      {
        title: incomeData.title,
        amount: incomeData.amount,
        category: incomeData.category,
        description: incomeData.description,
      },
    ]);
    setIncomeData({
      title: "",
      amount: "",
      category: "Freelancing",
      description: "",
    });
  }

  return (
    <div className="transaction">
      <h2>Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={handleData}
            required
            value={incomeData.title}
          />
        </div>
        <div>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            min={0}
            onChange={handleData}
            required
            value={incomeData.amount}
          />
        </div>
        <div>
          <select
            name="category"
            id="category"
            onChange={handleData}
            value={incomeData.category}
          >
            <option value="Freelancing">Freelancing</option>
            <option value="Salary">Salary</option>
            <option value="Youtube">Youtube</option>
            <option value="Bank transfer">Bank transfer</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="Add description"
            onChange={handleData}
            value={incomeData.description}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="submit-green">Add income</button>
        </div>
      </form>
    </div>
  );
}

export default IncomeTransaction;
