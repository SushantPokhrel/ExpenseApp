import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState("");
  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };
  const handleActive = (ref) => {
    if (active !== ref) setActive(ref);
  };
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header className="sidebar-header">
        <h3 className="logo">Logo</h3>
        <span
          className="collapse-icon"
          onClick={handleCollapse}
          title="Toggle Sidebar"
        >
          <i className="material-icons">
            {isCollapsed ? "chevron_right" : "chevron_left"}
          </i>
        </span>
      </header>
      <nav className="primary-nav">
        <ul>
          <li>
            <Link to="/" onClick={() => handleActive("dashboard")} className={active === "dashboard"? "active":""}>
              <i className="material-icons">dashboard</i>
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/expense" onClick={() => handleActive("expense")} className={active === "expense"? "active":""}>
              <i className="material-icons">attach_money</i>
              <span className="link-text">Expense</span>
            </Link>
          </li>
          <li>
            <Link to="/income" onClick={() => handleActive("income")} className={active === "income"? "active":""}>
              <i className="material-icons">payments</i>
              <span className="link-text">income</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => handleActive("contact")} className={active === "contact"? "active":""}>
              <i className="material-icons">contact_page</i>
              <span className="link-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul>
          <li>
            <i className="material-icons">account_circle</i>
          </li>
          <li>
            <i className="material-icons">undo</i>
            <span className="link-text">Sign Out</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
