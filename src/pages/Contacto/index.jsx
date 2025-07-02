import React from "react";
import Dirreccion from '../../assets/contacto/direccion.png';
import Phone from '../../assets/contacto/telefono.png';
import Time from '../../assets/contacto/hora.png';
import Mail from '../../assets/contacto/mail.png';
import './index.css'

const ContactPage = () => {
  const storeAddress = "Calle 18 # 1E - 100 Caobos Cúcuta Colombia";
  const storeEmail = "info@openservices.com.co";
  const storeOpeningHours = {
    monday_friday: "8:00 AM - 6:00 PM",
    saturday: "9 AM - 5 PM",
    sunday: "Cerrado",
  };

  return (
    <div className="container-contact-main">
      <h1 className="h1 h1-contact">Contactanos</h1>
      <div className="container-contact">
        <div className="container-left">
          <p>Nos encanta saber de ustedes, nuestros clientes de Open Services.<br/>P&oacute;ngase en contacto con nosotros y nos aseguraremos de responderle lo antes posible.</p>
          <form>
            <div className="div-flex">
              <div>
                <label>Nombre <span>*</span></label>
                <input type="text" required/>
              </div>
              
              <div>
                <label>Correo <span>*</span></label>
                <input type="text" required/>
              </div>
            </div>

            <div className="div-block">
              <label>Numero de Telefono</label>
              <input type="text" />
            </div>

            <div className="div-block desc">
              <label>Descripcion <span>*</span></label>
              <input type="text" required/>
            </div>

            <button type="submit" className="button-contact">Enviar</button>
          </form>
        </div>

        <div className="container-right">
          <div className="container-information">
            <div className="div-container-information">
              <img src={Dirreccion} alt="dirrecion" />
            </div>
            <div className="container-p">
              <h2>Direccion:</h2>
              <p>{storeAddress}</p>
            </div>
          </div>
          <div className="container-information">
            <div>
              <img src={Phone} alt="telefono" />
            </div>
            <div className="container-p">
              <h2>Celular:</h2>
              <p>310 2740359</p>  
            </div>
          </div>
          <div className="container-information">
            <div>
              <img src={Time} alt="hora" />
            </div>
            <div className="container-p">
              <h2>Abierto:</h2>
              <p>Lunes - Viernes: {storeOpeningHours.monday_friday} <br />Sabado: {storeOpeningHours.saturday} <br />Domingo: {storeOpeningHours.sunday}</p>
            </div>
          </div>
          <div className="container-information">
            <div>
              <img src={Mail} alt="gmail" />  
            </div>
            <div className="container-p">
              <h2>Correo:</h2>
              <p>{storeEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

