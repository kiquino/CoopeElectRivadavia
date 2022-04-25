import React from "react";
import { Nav } from "react-bootstrap";
import corte from "../images/corte-progranado-off.png";
import medios from "../images/medios-de-pago-off.png";
import subsidio from "../images/subsidio-off.png";
import venta from "../images/venta-off.png";
import one from "../images/one-off.png";
const SpinnerMod =()=>{
return(
    <div  id="spinner" className=" spinner-link ">
          
        <Nav.Item>
          <Nav.Link href="/cortes-programados">
            <img className="spinner-img" src="spinner.png" alt="spinner" />
            <img className="logo-coope-home" src={corte} alt="logo-coope-ig" />
          </Nav.Link>
          <h2>CORTES</h2>
          <h2 className="bis">PROGRAMADOS</h2>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/medios-de-pago">
          <img className="spinner-img" src="spinner.png" alt="spinner" />
            <img
              className="logo-coope-home"
              src={medios}
              alt="logo-coope-face"
            />
          </Nav.Link>
          <h2>MEDIO</h2>
          <h2 className="bis">DE PAGO</h2>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/subsidios">
          <img className="spinner-img" src="spinner.png" alt="spinner" />
            <img
              className="logo-coope-home"
              src={subsidio}
              alt="logo-coope-tw"
            />
          </Nav.Link>
          <h2>SUBSIDIO</h2>
          <h2 className="bis">POR FALLECIMIENTO</h2>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/venta-de-materiales">
          <img className="spinner-img" src="spinner.png" alt="spinner" />
            <img className="logo-coope-home" src={venta} alt="logo-coope-tw" />
          </Nav.Link>
          <h2>VENTA</h2>
          <h2 className="bis">DE MATERIALES</h2>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/one-internet">
          <img className="spinner-img" src="spinner.png" alt="spinner" />
            <img className="logo-coope-home" src={one} alt="logo-coope-tw" />
          </Nav.Link>
          <h2>ONE</h2>
          <h2 className="bis">INTERNET</h2>
        </Nav.Item>
      </div>
   
)
}
export default SpinnerMod;