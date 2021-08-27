import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Languages: ["HTML5", "CSS3", "JavaScript ES6+", "SQL","NoSQL","Bootstarp"],
      applications: [ "Github", "MongoDB","MySQL","VS Code","Git"],
      Tools: [ "React", "Handlebars","GraphQL","Rest APIs","Node js"],
    };
  };
  
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="text-center">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="section col text-center  ">
            <b>icon</b>
            <h1 className="mt-5">Languages</h1>
            <br />
            {this.state.Languages.map((value) => {
              return <h6>{value}</h6>;
            })}
          </div>
          <div className="section col text-center ">
            <b>icon 2</b>
            <h1 className="mt-5">Applications</h1>
            <br />
            {this.state.applications.map((value) => {
              return <h6>{value}</h6>;
            })}
          </div>
          <div className="section  col text-center ">
            <b>icon 3</b>
            <h1 className="mt-5">Tools</h1>
            <br />
            {this.state.Tools.map((value) => {
              return <h6>{value}</h6>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
