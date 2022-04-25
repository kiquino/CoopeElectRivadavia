import React from "react";

import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Redes from "../componets/elements/redes";
import ContactoMod from "../componets/contact";
import ContactForm from "../componets/contacto-form";
import FollowUs from "../componets/follow";

const Contacto = () => {
  return (
    <div>
    
   < Navbar />
           <ContactoMod />
           <ContactForm />
           <FollowUs />
           <Redes />
            <Footer />
    </div>
  );
};

export default Contacto;
