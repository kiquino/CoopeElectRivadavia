import React from "react";
import { Nav } from "react-bootstrap";
import novedadesimg from "../images/novedades.png";
const NovedadesTitle = (props) =>{
    return(
        <div id="novedades-title" className=" novedades-title">
        <Nav.Item className="novedades-title">
          <Nav.Link>
            <img
              className="logo-coope-home"
              src={novedadesimg}
              alt="logo-coope-tw"
            />
            <h1>{props.title}</h1>
          </Nav.Link>
        </Nav.Item>
      </div>
    )
}
export default NovedadesTitle;