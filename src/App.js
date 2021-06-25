import "./App.css";
import Login from "./view/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./view/Home";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
