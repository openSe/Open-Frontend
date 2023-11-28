import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useLocalStorage} from '../../components/LocalStorage/useLocalStorage';
import './index.css';

const ShippingAddressForm = () => {
  const navigate = useNavigate();
  const user = window.localStorage.getItem("token_app");
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  const initialItems = useLocalStorage ('item','');
  const [cartItems, setCartItems] = useState(initialItems[0]);
  return (
    // <div>
    //   <h1></h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Nombre Completo:
    //       <input
    //         type="text"
    //         name="fullName"
    //         value={formData.fullName}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Dirección:
    //       <input
    //         type="text"
    //         name="addressLine1"
    //         value={formData.addressLine1}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Ciudad:
    //       <input
    //         type="text"
    //         name="city" 
    //         value={formData.city}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Estado:
    //       <input
    //         type="text"
    //         name="state"
    //         value={formData.state}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Zip Code:
    //       <input
    //         type="text"
    //         name="zipCode"
    //         value={formData.zipCode}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="checkout-main-contain">
      <div className="checkout-title">
        <h1>Detalles de Compra</h1>
        {user?.name ? (
          <div>
          </div>
        ):(
          <div onClick={() => navigate("/login")}>
            <p>Iniciar Sesión</p>
          </div>
        )}
      </div>
      <div className="checkout-main">
        <h2>Informacion</h2>
        <div className="checkout-main-section">
          <div className="checkout-form">
            <form>
              <div>
                <label>Correo Electronico <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Nombre <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Apellido <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Departamento <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Municipio, capital o localida <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Barrio <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Direccion <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Telefono de Contacto <span>*</span></label>
                <input type="text" required/>
              </div>
              <div>
                <label>Referencias adicionales</label>
                <textarea cols="30" rows="10"></textarea>
              </div>
            </form>
            <div className="button-checkout" onClick={() => navigate("/payment")}>
              <p>Siguiente</p>
            </div>
          </div>
          <div className="checkout-summary">
            <h2>Resumen de compra</h2>
            {cartItems.map((item)  => (
              <div className="checkout-items-summary">
                <div className="checkout-items-img">
                  <img src={item.image} alt={item.name}/>
                </div>
                <div className="checkout-items-desc">
                  <i>{item.name}</i>
                  <div>
                    <p>Qty: {item.qty}</p>
                    <p>${(item.price * item.qty).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
