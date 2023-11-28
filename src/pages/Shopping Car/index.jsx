import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import FlechaArriba from "../../assets/cart/flechaArriba.png";
import FlechaAbajo from "../../assets/cart/flechaAbajo.png";
import Cerrar from "../../assets/cart/Borrar.png"
import "./index.css";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('item')) || [];
    setCartItems(storedArray);
  }, []);

  const getSubTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const getIVA = () => {
    const totalIVA = getSubTotalPrice() * 0.19; 
    const totalIVARounded = Number(totalIVA.toFixed(2))
    return totalIVARounded;
  }

  const getTotalPrice = () =>{
    const total = parseFloat(getSubTotalPrice()) + parseFloat(getIVA()) + parseFloat(getDelivery());
    const totalRounded = Number(total.toFixed(2))
    return totalRounded;
  }
  
  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.numPart === itemId && item.qty > 1
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };
  
  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.numPart === itemId && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };
  
  const updateLocalStorage = (items) => {
    localStorage.setItem('item', JSON.stringify(items));
  };

  const removeItem = (itemId) => {
    const storedArray = JSON.parse(localStorage.getItem('item')) || [];
    const deleteItem = storedArray.findIndex(item => item.numPart === itemId);
    if (deleteItem !== -1) {
      storedArray.splice(deleteItem, 1);
      localStorage.setItem('item', JSON.stringify(storedArray));
      setCartItems(storedArray);
    }
  };

  const clearCart = () => {
    localStorage.setItem('item', JSON.stringify([]));
    const storedArray = JSON.parse(localStorage.getItem('item')) || [];
    setCartItems(storedArray);
  };

  const getDelivery = () =>{
    if(getSubTotalPrice() <= 1000000){
    	return 10000;
    } else{
      return getSubTotalPrice() * 0.01;
    }
  }
  return (
    <div className="container-master">
      <h1 className="h1-shopping">Carrito de Compras</h1>
      <div className="container-shopping-car no-mobile">
        <div className="container-table-car">
          <table>
            <thead className="thead">
              <tr>
                <th className="first-product-car">Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tboddy">
              {cartItems.map((item) => (
              <tr key={item.numPart}>
                <td className="first-product-car">
                  <div className="div-product-car">
                    <img src={item.image} alt={item.name}/>
                    <i>{item.name}</i>
                  </div>
                </td>
                <td>${item.price.toLocaleString()}</td>
                <td>
                  <div className="container-quantity">
                    <div className="div-quantity">
                      {item.qty}
                    </div>
                    <div className="div-button">
                      <button onClick={() => increaseQuantity(item.numPart)} className="button-car"><img src={FlechaArriba} alt="flechaArriba" /></button>
                      <button onClick={() => decreaseQuantity(item.numPart)} className="button-car"><img src={FlechaAbajo} alt="flechaAbajo" /></button>
                    </div>
                  </div>
                </td>
                <td>${(item.price * item.qty).toLocaleString()}</td>
                <td className="container-close-car">
                  <div className="div-close-button">
                    <button onClick={() => removeItem(item.numPart)} className="button-car"><img src={Cerrar} alt="borrar"></img></button>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
            <tfoot className="td-foot">
              <tr>
                <td className="first-product-car"><a href="/">Continuar Comprando</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="td-button-foot"><button onClick={clearCart}>Vaciar Carrito</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="container-div-shoppingcar">
            <h1 className="h1">Resumen</h1>
            <div className="div-shoppingCar-price">
              <div className="div-shoppingCar-address">
                <h3>Subtotal</h3>
                <p>${getSubTotalPrice().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>IVA</h3>
                <p>${getIVA().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>Envio</h3>
                <p>${getDelivery().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>Total</h3>
                <p>${getTotalPrice().toLocaleString()}</p>
              </div>
            </div>
            <div className="div-summary-foot">
              <button onClick={() => navigate("/shoppingAddress")} className="div-summary-button">Proceder al Pago</button>
              <div onClick={()=> window.location.href="/"}>
                <a href="/">Continuar Comprando</a>
              </div>
            </div>
        </div>
      </div>
      <div className="mobile">
        <div className="container-shopping-car">
          <div className="container-div-shoppingcar ">
            <h1 className="h1">Resumen</h1>
            <div className="div-shopping-main">
            </div>
            <div className="div-shoppingCar-price">
              <div className="div-shoppingCar-address">
                <h3>Subtotal</h3>
                <p>${getSubTotalPrice().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>IVA</h3>
                <p>${getIVA().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>Envio</h3>
                <p>${getDelivery().toLocaleString()}</p>
              </div>
              <div className="div-shoppingCar-address">
                <h3>Total</h3>
                <p>${getTotalPrice().toLocaleString()}</p>
              </div>
            </div>
            <div className="div-summary-foot">
              <button onClick={() => navigate("/shoppingAddress")} className="div-summary-button">Proceder al Pago</button>
              <div onClick={()=> window.location.href="/"}>
                <a href="/">Continuar Comprando</a>
              </div>
            </div>
        </div>
        </div>
          <div className="container-table-car">
            {cartItems.map((item) => (
              <div className="shopping-container-mobile">
                <div className="img-shopping-mobile">
                  <img src={item.image} alt={item.name}/>
                  <i>{item.name}</i>
                </div>
                <div className="content-shopping-mobile">
                  <p>Precio</p>
                  <p className="content-p">Qty</p>
                  <p>Subtotal</p>
                  <p></p>
                </div>
                <div className="desc-shopping-mobile">
                  <div className="desc-div">
                    <p>${item.price.toLocaleString()}</p>
                  </div>
                  <div className="container-quantity desc-div">
                      <div className="div-quantity">
                        {item.qty}
                      </div>
                      <div className="div-button">
                        <button onClick={() => increaseQuantity(item.numPart)} className="button-car"><img src={FlechaArriba} alt="flechaArriba" /></button>
                        <button onClick={() => decreaseQuantity(item.numPart)} className="button-car"><img src={FlechaAbajo} alt="flechaAbajo" /></button>
                      </div>
                    </div>
                    <div className="desc-div">
                      <p>${(item.price * item.qty).toLocaleString()}</p>
                    </div>
                    <div className="desc-div">
                      <button onClick={() => removeItem(item.numPart)} className="button-car">
                        <img src={Cerrar} alt="borrar"></img>
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default ShoppingCart;