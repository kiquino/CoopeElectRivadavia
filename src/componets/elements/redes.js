import React from "react";
import { Nav } from "react-bootstrap";
import redesig from "../../images/redes-ig.png";
import redesface from "../../images/redes-face.png";
import redestw from "../../images/redes-tw.png";
import redeswp from "../../images/redes-wapp.png";
const Redes =()=>{
    return( <div className=" redes-efiener">
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redesface}
          alt="logo-coope-face"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redeswp}
          alt="logo-coope-ig"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redestw}
          alt="logo-coope-tw"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redesig}
          alt="logo-coope-ig"
        />
      </Nav.Link>
    </Nav.Item>
  </div>)
}
export default Redes;