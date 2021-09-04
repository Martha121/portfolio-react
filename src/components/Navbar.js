import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul>
            <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
            <Navitem
              item="About"
              tolink="/about"
              activec={this.activeitem}
            ></Navitem>
            <Navitem
              item="Education"
              tolink="/education"
              activec={this.activeitem}
            ></Navitem>
            <Navitem
              item="Skills"
              tolink="/skills"
              activec={this.activeitem}
            ></Navitem>
            <Navitem
              item="Projects"
              tolink="/projects"
              activec={this.activeitem}
            ></Navitem>
            <Navitem
              item="Contact"
              tolink="/contact"
              activec={this.activeitem}
            ></Navitem>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
