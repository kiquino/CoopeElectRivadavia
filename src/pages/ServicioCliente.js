import React from "react";
import Banner from "../componets/banner";

import TitleGeneric from "../componets/titulogen";
import Banner1 from '../images/banner1.png';

const ServicioCliente = () => {
  return (
    <div>
    

           <Banner img={Banner1} textoVisible={"none"} />
          <TitleGeneric text="Servicio al cliente" />
  
    </div>
  );
};

export default ServicioCliente;
