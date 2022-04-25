import React from "react";
import Banner from "../componets/banner";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Redes from "../componets/elements/redes";
import banner1 from "../images/banner1.png";
import PaymentMethod from "../componets/paymentmethod";


const DescargarFactura = () => {
  return (
    <div>
     
       < Navbar />
<Banner img={banner1}  textoVisible={"visible"}/>
<PaymentMethod />
           <Redes />
            <Footer />
    </div>
  );
};

export default DescargarFactura;
