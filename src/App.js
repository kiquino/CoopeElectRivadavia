import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LaCooperativa from "./pages/LaCooperativa";
import DescargarFactura from "./pages/DescargaFactura";
import ServicioCliente from './pages/ServicioCliente';
import Contacto from './pages/Contacto';
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/notfound";
import Cortes from "./pages/cortes";
import MedioDePago from "./pages/mediosdepago";
import Subsidios from "./pages/subsidios";
import Venta from "./pages/venta";
import Internet from "./pages/internet";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lacooperativa" element={<LaCooperativa />} />
          <Route path="/descargafactura" element ={<DescargarFactura />} />
          <Route path="/serviciocliente" element={<ServicioCliente />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cortes-programados" element={<Cortes />} />
          <Route path="/medios-de-pago" element={<MedioDePago />} />
          <Route path="/subsidios" element={<Subsidios />} />
          <Route path="/venta-de-materiales" element={<Venta />} />
          <Route path="/one-internet" element={<Internet />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
      </Router>
    </div>
  );
}

export default App;
