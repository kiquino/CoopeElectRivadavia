import React from "react";
import CarouselMod from "./carousel";
import EficienciaEnergetica from "./eficienciaEnergetica";

import SpinnerMod from "./spinner";
import NovedadesTitle from "./novedades";
import NovedadesCards from "./novedadesCard";
import Redes from "./elements/redes";




const BodyHP = () => {
  return (
    <div>
      {/* //START CAROUSEL SLIDER HOME */}

   < CarouselMod />

      {/* //END CAROUSEL SLIDER HOME */}

      {/* //START ICONS SPINNERS LINKS */}
    <SpinnerMod />
      {/* //END ICONS SPINNERS LINKS */}

      {/* START NOVEDADES */}
      <NovedadesTitle title="NOVEDADES" />
      
      {/* END NOVEDADES */}

      {/* START CARDS NOVEDADES */}
   <NovedadesCards />
      {/* END CARDS NOVEDADES */}

      {/* START EFICIENCIA ENERGECTICA */}
    
  <EficienciaEnergetica />
  <Redes />
      {/* END EFICIENCIA ENERGETICA */}
    </div>
  );
};
export default BodyHP;
