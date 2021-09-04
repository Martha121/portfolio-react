import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import Projects from "./contents/Projects";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route for About.js contents */}
        <Route path="/about">
          <About />
        </Route>
        {/* Route for Education.js contents */}
        <Route path="/education">
          <Education />
        </Route>
        {/* Route for Skills.js contents */}
        <Route path="/skills">
          <Skills />
        </Route>
        {/* Route for Projects.js contents */}
        <Route path="/projects">
          <Projects />
        </Route>
        {/* Route for Contact.js contents */}
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </HashRouter>
  );
}
export default App;
