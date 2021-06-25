import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login";

const RouterApp = (props) => {
  return (
    <div className="main-container">
      <AuthState>
        <Router>
          <Route exact path="/" component={Login} />
        </Router>
      </AuthState>
    </div>
  );
};

export default RouterApp;
