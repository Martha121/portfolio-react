import React, { Component } from "react";
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
      <div className=" container condiv skills">
        <h1 className=" two subtopic">My Skills</h1>
        <div className= "wrapper">
          <div classname="one">
            <h2> Languages</h2>
            <ul>
              {this.state.Languages.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
          <div classname="two">
            <h2> Applications </h2>
            <ul>
              {this.state.applications.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
          <div className="three">
            <h2> Tools </h2>
            <ul>
              {this.state.Tools.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
