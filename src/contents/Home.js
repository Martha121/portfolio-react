import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/portada4.jpg";
import Social from "../components/Social";
class Home extends Component {
  render() {
    return (
      <div
        className="parent condiv contact section"
        style={{
          backgroundImage: `url(${profilepic})`,
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div class="overlay"></div>
        <div class="content hometittle">I am Martha Gamez</div>
        <Social />
      </div>
    );
  }
}
export default Home;
