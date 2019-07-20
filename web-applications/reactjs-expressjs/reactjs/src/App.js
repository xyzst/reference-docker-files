import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fibonacci from "./components/Fibonacci";
import OtherPage from "./components/OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Fibonacci Calculator</h1>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fibonacci} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
