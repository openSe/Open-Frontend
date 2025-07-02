import React from "react";
import "./index.css";
import Information from "../../components/Information"

const AboutUs = () => {
  return (
    <div className="container-information-main">
      <div>
        <Information />
      </div>
      <div>
        <h1 className="h1-information">Acerca de Nosostros</h1>
        <p>OPEN SERVICES SISTEMAS ELECTRONICOS SAS.  Es una Empresa dedicada a prestar servicios de outsourcing y distribución de repuestos y partes para equipos electrónicos, implementando  soluciones de soporte técnico e infraestructura para la tecnología de la información y comunicaciones TIC, a nivel nacional, brindando calidad y confiabilidad a nuestros clientes, mediante personal calificado.</p>
      </div>
    </div>
)};

export default AboutUs;
