import React, { useState } from "react";
import "../css/login.css";
import authApi from "../api/loginRequest";

function Login({ history }) {
  const [model, setModel] = useState({
    status: "active",
  });
  const [userNameError, setUserNameError] = useState("");

  const changeInput = (e) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  };

  const validForm = () => {
    if (model.name && model.password && model.status) {
      loginForm(model);
      setUserNameError("");
    } else setUserNameError("Please enter Username and Password");
  };

  const loginForm = async (model) => {
    const data = await authApi.loginUser(model);
    console.log(data.success);

    if (data.success) {
      history.push("/home");
    } else {
      setUserNameError("Username or Password Error!");
    }
  };

  return (
    <div className="login">
      {/* <div className="image-design-container">abcd</div> */}
      <div className="login-container">
        <h1 className="welcome-h1-style">Welcome Back,</h1>
        <h1 className="h1-style">Login</h1>
        <div className="username-container">
          <input
            className="username-input-container"
            type="text"
            name="name"
            placeholder="Username"
            onChange={changeInput}
          ></input>
        </div>

        <div className="username-container">
          <input
            className="passoword-input-container"
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeInput}
          ></input>
        </div>
        <div className="login-button-container">
          <span className="log-button-container" onClick={validForm}>
            Login
          </span>
        </div>

        <span className="error-span">{userNameError}</span>
      </div>
    </div>
  );
}

export default Login;
