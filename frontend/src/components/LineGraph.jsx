import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  LinearScale,
  PointElement,
  Legend,
  Title,
  LineElement,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip
);

function LineGraph() {
  const { expenseHistory } = useContext(Context);
  console.log(expenseHistory);
  const Data = {
    labels: expenseHistory?.map((item) => item.date),
    datasets: [
      {
        label: "Expense",
        data: expenseHistory?.map((item) => item.amount),
        borderColor: "red",
        borderWidth: 2,
        tension:0.4
        
      },
      
    ],
    
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
     // Adjusts to container size
  };

  return (
    <div className="graph-wrapper">
      <Line options={options} data={Data} />
    </div>
  );
}

export default LineGraph;
