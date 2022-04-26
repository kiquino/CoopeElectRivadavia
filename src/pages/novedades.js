import React from "react";
import Banner from "../componets/banner";
import imagen from "../images/noticia.png";
import BloqueTexto from "../componets/textBlock";
const Novedades =()=>{
    return(
        <div className="contenedor">
            <Banner img={imagen} textoVisible="none" />
            <BloqueTexto alineacion="left" titulo="Título de la nota" texto="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
�ncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
quis nostrud exerci ta�on ullamcorper suscipit lobor�s nisl ut" />
        </div>
    )
}
export default Novedades;