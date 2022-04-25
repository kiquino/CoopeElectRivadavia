import React from 'react';

import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

import Historia from '../componets/Historia';
import Redes from '../componets/elements/redes';
import Banner from '../componets/banner';
import Banner1 from '../images/banner1.png';

const LaCooperativa = () => {
  return (
    <div>
     
        < Navbar />
            <Banner img={Banner1} textoVisible={"none"} />
<Historia />

<Redes />
            <Footer />
    </div>
  )
}

export default LaCooperativa