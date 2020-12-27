import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import {Home, Resume} from "./pages/"

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/resume" exact component={() => <Resume />} />
                    <Route path="/projects" exact component={() => <Home />} />
                    <Route path="/contact" exact component={() => <Home />} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
