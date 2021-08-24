import React, { Component } from "react";
import "./Box.css"
class Projects extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1>Projects</h1>
        <div className="grid">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5"></div>
        </div>
      </div>
    );
  }
}
export default Projects;