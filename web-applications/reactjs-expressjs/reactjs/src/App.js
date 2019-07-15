import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fibonnacci from "./components/Fibonnacci";
import OtherPage from "./components/OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fibonnacci} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
