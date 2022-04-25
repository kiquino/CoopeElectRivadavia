import React from "react";
import BodyHP from "../componets/Bodyhp";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const HomePage = ()=>{
    return(
        <div>
            {/* START NAVBAR */}
            < Navbar />
            < BodyHP />
            <Footer />
        </div>
    )
}
export default HomePage;