import React from "react";
import { Card,Nav } from "react-bootstrap"
import notacompleta from "../../images/nota-completa.png";
const CardItem =(props)=>{
    return(
        <Card >
        <Card.Img variant="top" src={props.img} />
      
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.texto}
            </Card.Text>
            <Nav.Item>
              <Nav.Link>
                <img
                  className="logo-coope-home"
                  src={notacompleta}
                  alt="logo-coope-tw"
                />
              </Nav.Link>
            </Nav.Item>
          </Card.Body>
        
      </Card>
    )
}
export default CardItem;