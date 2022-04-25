import React from "react";
import banco1 from "../images/banco1.png";
import banco2 from "../images/banco2.png";
import banco3 from "../images/banco3.png";
import banco4 from "../images/banco4.png";
import banco5 from "../images/banco5.png";
import banco6 from "../images/banco6.png";
import banco7 from "../images/banco7.png";
import banco8 from "../images/banco8.png";


const PaymentMethod = ()=>{
    return(
        <div className="payment-method-container">
        <h1>
            MEDIOS DE PAGO
        </h1>
        <div className="payment-method-content"> <p>
        Para facilitar el pago de tu factura La Cooperativa te ofrece la posibilidad 
de abonarla a través de diferentes canales de pago</p></div>
        <div className="payment-method-list">
            <ul>
                <li><img src={banco1} alt={banco1} /></li>
                <li><img src={banco2} alt={banco2} /></li>
                <li><img src={banco3} alt={banco3} /></li>
                <li><img src={banco4} alt={banco4} /></li>
                <li><img src={banco5} alt={banco5} /></li>
                <li><img src={banco6} alt={banco6} /></li>
                <li><img src={banco7} alt={banco7} /></li>
                <li><img src={banco8} alt={banco8} /></li>
                
            </ul>
        </div>
        </div>
    )
}
export default PaymentMethod;