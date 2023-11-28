import React from "react";
import {useNavigate } from "react-router-dom";
import "./index.css"

function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div className="services-container">
      <div className="div-services-content">
        <h1 className="services-h1">Servicios Open Services</h1>
        <p className="p-sevices">Bienvenido a nuestra seccion de Sevicios. Por favor rellene el formulario</p>
        <div>
          <div className="form-container">
            <form>
              <label className="label-services">Nombre</label>
              <input type="text" required/>
              <label className="label-services">Apellido</label>
              <input type="text" required/>
              <label className="label-services">Selecciona el Tipo de Servicio que Desea</label>
              <select name="" id="">
                <option value="">Instalacion</option>
                <option value="">Mantenimiento Correctivo</option>
                <option value="">Mantenimiento Preventivo</option>
              </select>
              <label className="label-services">Asunto</label>
              <textarea name="" id="" cols="30" rows="10" required></textarea>
              <button className="button-services" type="submit">Enviar</button>
            </form>
            <div className="container container-second">
              <h2>¿Nuevo cliente?</h2>
              <p>Crear una cuenta tiene muchos beneficios:</p>
              <ul>
                <li>Mantener m&aacute;s de una dirección.</li>
                <li>Pagos m&aacute;s directos</li>
                <li>Seguimiento de pedidos y más</li>
              </ul>
              <div onClick={() => navigate("/register")}className="button-register">Crear una Cuenta</div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default ServicesPage;
