import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import {Home, Resume, Contact, Projects} from "./pages/"

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/resume" exact component={() => <Resume />} />
                    <Route path="/projects" exact component={() => <Projects />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
