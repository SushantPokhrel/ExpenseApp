import React from "react";
import "../styles/Login.css";
import FormLogin from "../components/FormLogin";
function Login() {
  return (
    <div className="login-flex">
      <div className="login-left">
        <img
          src="https://img.freepik.com/free-vector/financial-analysts-doing-income-statement-with-calculator-laptop-income-statement-company-financial-statement-balance-sheet-concept_335657-756.jpg"
          alt="img-login"
          className="img-login"
        />
      </div>
      <FormLogin />
    </div>
  );
}

export default Login;
