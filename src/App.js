import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/resume" exact component={() => <Home />} />
                    <Route path="/projects" exact component={() => <Home />} />
                    <Route path="/contact" exact component={() => <Home />} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
