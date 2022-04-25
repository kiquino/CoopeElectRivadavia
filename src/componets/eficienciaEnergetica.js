import React from "react";

import lamparaoff from "../images/lampara-off.png";

import esquinaimg from "../images/esquina.png";
const EficienciaEnergetica = ()=>{
return(
    <div id="eficiencia-energetica" className="eficiencia-energetica">
    <div className="lampTitle">
        <h1><b>EFICIENCIA</b> ENERGÉTICA</h1> <img src={lamparaoff} alt="lampara" />
        <img className="esquina-img-lamp" src={esquinaimg} alt="fondo-artistico" />
      </div>
     
      </div>
)
}
export default EficienciaEnergetica;