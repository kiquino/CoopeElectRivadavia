import React from "react";
import logocoope from "../images/logo-blanco.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer >
        <div className="img-container">
          <img className="logo-blanco" src={logocoope} alt="logo-coope" />
        </div>
    <div className="hr"> </div>
        <ul className="link-list-footer">
          <li>
            <h5>INFO DE INTERES</h5>

            <ul>
              <li>MEDIOS DE PAGO</li>
              <li>IMPRIMI TU FACTURA</li>
              <li>CORTE DE ENERGIA</li>
              <li>HORARIOS DE ATENCION</li>
              <li>INTERNET</li>
            </ul>
          </li>

          <li>
            <h5>CONTACTO</h5>

            <ul>
              <li>GUARDIA</li>
              <li>WHATSAPP</li>
              <li>SALON DE VENTAS</li>
              <li>CORREO</li>
            </ul>
          </li>

          <li>
            <h5>PREGUNTAS FRECUENTES</h5>
            <ul>
              <li>CAMBIO DE TITULARIDAD</li>
              <li>NUEVO MEDIDOR</li>
              <li>TARIFA SOCIAL</li>
              <li>ELECTRODEPENDIENTES</li>
              <li>FACTURA VENCIDA</li>
              <li>ALUMBRADO PUBLICO</li>
            </ul>
          </li>
        </ul>
        <p>Copyright © All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
