import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/martha_gamez.jpg";
import Social from "../components/Social";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["Hi! I am Martha Gamez.", "I am a fullstack web developer."]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}
export default Home;
