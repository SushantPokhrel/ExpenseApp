import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="profile">
        <h3>Profile </h3>{" "}
        <div className="bg-collapse"> 
          {" "}
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/expense">
            <i className="fa-solid fa-money-check-dollar"></i><span>Expense</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fa-solid fa-address-book"></i><span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fa-solid fa-address-book"></i><span>Contact</span>
          </Link>
        </li>    <li>
          <Link to="">
            <i className="fa-solid fa-address-book"></i><span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
