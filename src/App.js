import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, AboutMe, Resume, Contact, Projects } from "./components";


function App() {
  return (
    <div className="App">

      <Router>
        <Navigation/>
          <div className="content">
            <Switch>
              <Route path="/" exact component={() => <AboutMe />} />
              <Route path="/resume" exact component={() => <Resume />} />
              <Route path="/projects" exact component={() => <Projects />} />
              <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
