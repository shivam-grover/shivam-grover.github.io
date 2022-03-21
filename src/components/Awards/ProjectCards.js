import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  if(props.imgPath == ""){
    var image = ""
  }
  else{
    var image = <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  }

  if(props.list==null){
    var description = <Card.Text style={{ textAlign: "justify", marginTop: "30px", whiteSpace: "pre-line" }}>{props.description}</Card.Text>
  }
  else{
    var list_elements = [];

    for(let i=0; i<props.list.length; i++){
      list_elements.push(props.list[i]);
    }

    var description = <Card.Text style={{ textAlign: "justify", marginTop: "30px" }}>
                        <ul>
                          {props.list.map((item) => (
                            <li key={item} style={{ marginBottom: "15px" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Card.Text>
  }

  return (
    <Card className="project-card-view">
      {image}
      <Card.Body style={{ marginBottom: "28px" }}>
        <Card.Title>{props.title}</Card.Title>
        {description}
        <Button variant="primary" href={props.link} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
          <BiLinkExternal /> &nbsp;
          {props.list ? "View Resume" : "More Details"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
