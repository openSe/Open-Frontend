import React from "react";
import "./index.css";
import Information from "../../components/Information"

const OurServices = () => {
  return (
    <div className="container-information-main">
      <div>
        <Information />
      </div>
      <div>
        <h1 className="h1-information">Nuestros Servicios</h1>
        <p>OPEN SERVICES SISTEMAS ELECTRONICOS SAS, fue registrada en la Cámara de Comercio de Cúcuta - Colombia en el año 2013 como una Empresa  dedicada a la Ingeniería, Comercialización, Suministro, Instalación y Servicios postventa  de equipos y sistemas electrónicos en las Tecnologías de la Información y Comunicaciones (TIC).  Contamos con la experiencia en los campos de Servicios  Técnicos y Profesionales en el suministro y mantenimiento de equipos Teleinformáticos, Adecuación de Centros de Computo, Sistemas de Respaldo Eléctrico, Integración de tecnologías WEB.<br/>Contamos con acuerdos de colaboración y Empresas de primer nivel para el suministro de equipos y respaldo técnico de Repuestos para los equipos suministrados e instalados.</p>
      </div>
    </div>
)};

export default OurServices;
