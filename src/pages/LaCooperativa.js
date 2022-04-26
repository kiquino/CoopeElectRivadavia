import React from 'react';



import Historia from '../componets/Historia';
import Redes from '../componets/elements/redes';
import Banner from '../componets/banner';
import Banner1 from '../images/banner1.png';

const LaCooperativa = () => {
  return (
    <div>
     
   
            <Banner img={Banner1} textoVisible={"none"} />
<Historia />

<Redes />
          
    </div>
  )
}

export default LaCooperativa