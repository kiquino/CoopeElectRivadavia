import React from "react";
import TitleGeneric from "../componets/titulogen";
import Banner from "../componets/banner";
import imgBanner from "../images/banner2.png";
const Internet =()=>{
    return(
        <div>
             <Banner textoVisible="none" img={imgBanner} />
            <TitleGeneric text="internet" />
        </div>
    )
}
export default Internet;