import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from  "./Pages/Contact"
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Contact">
          <Navbar/>
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
