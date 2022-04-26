import React from "react";
import Banner from "../componets/banner";

import Redes from "../componets/elements/redes";
import banner1 from "../images/banner1.png";
import PaymentMethod from "../componets/paymentmethod";


const DescargarFactura = () => {
  return (
    <div>
     
   
<Banner img={banner1}  textoVisible={"visible"}/>
<PaymentMethod />
           <Redes />
      
    </div>
  );
};

export default DescargarFactura;
