import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigned, setIsSigned] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  function handleSignIn(e) {
    e.preventDefault();
    setIsSigned((prev) => !prev);
  }
  return (
    <form onSubmit={handleSubmit} className="form-login">
      <h2>{isSigned ? "User Login" : "User Sign Up"}</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="johndoe22@gmail.com"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>
      <button type="submit">{isSigned ? "Login" : "Sign Up"}</button>
      <div>
        {" "}
        <a href="" className="forgot-pass">
          forgot password?
        </a>
      </div>
      <div className="signUp">
        {" "}
        <p>
          {isSigned ? "don't have an account ?" : "already have an account ?"}{" "}
        </p>
        <a href="" onClick={handleSignIn}>
          {isSigned ? "Sign Up" : "Login"}
        </a>
      </div>
    </form>
  );
}

export default FormLogin;
