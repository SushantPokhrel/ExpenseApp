import React from "react";
import LineGraph from "../components/LineGraph";
import RecentHistory from "../components/RecentHistory";
import "../styles/DashBoard.css";

function DashBoard() {
  return (
    <div className="graph-container">
      <LineGraph />
      <RecentHistory />
    </div>
  );
}

export default DashBoard;
