import React, { Component } from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

const Projects =()=> {
  const cardInfo = [
    { image: "", title: "Mostachos Pizza", text: "Page for a pizza restaurant" },
    { image: "", title: "Karol Photography", text: "Page for a Photographer" },
    { image: "", title: "Choose and Chill", text: "Page for entertain on weekends" },
    { image: "", title: "Lab Manager", text: "Page created to help the functions in a lab" },
    { image: "", title: "Confestador", text: "Page to help a person make reservations " },
  ];

  const renderCard = (card,index) => {
    return (
      <Card border= "warning" style={{ width: "16rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Button variant="warning">Go to page</Button>
        </Card.Body>
      </Card>
    ); 
  };
    return (
      <div className="condiv contact">
        <h1>Projects</h1>
        <div className="grid">
          {cardInfo.map(renderCard)}
        </div>
      </div>
    );
  
}
export default Projects;