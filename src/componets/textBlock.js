import React from "react";

const BloqueTexto=(props)=>{

  
return(
 
    <div className="text-block" style={{textAlign:props.alineacion}}>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
    </div>
  
)
}
export default BloqueTexto;