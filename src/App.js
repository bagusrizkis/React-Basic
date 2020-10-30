import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import HomeP from "./pages/Home";
import AboutP from "./pages/About";
import UserP from "./pages/User";
import NavbarC from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavbarC></NavbarC>
        <Switch>
          <Route path="/users">
            <UserP></UserP>
          </Route>
          <Route path="/about">
            <AboutP></AboutP>
          </Route>
          <Route path="/" component={HomeP}></Route>
        </Switch>
      </div>
    </Router>
  );
}
