import { useState } from "react";

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalValue(totalValue + product.price);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    setTotalValue(totalValue - product.price);
  };

  // Función para seleccionar un método de pago
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div>
      {/* <h1>Carrito de Compras</h1>

      <h2>Productos seleccionados:</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Valor total: ${totalValue}</h2>

      <h2>Métodos de Pago:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="tarjeta"
            checked={selectedPaymentMethod === "tarjeta"}
            onChange={() => selectPaymentMethod("tarjeta")}
          />
          Tarjeta de crédito
        </label>
        <label>
          <input
            type="radio"
            value="efectivo"
            checked={selectedPaymentMethod === "efectivo"}
            onChange={() => selectPaymentMethod("efectivo")}
          />
          Efectivo
        </label>
      </div> */}

      <h1>Metodo de Pago</h1>
    </div>
  );
};

export default ShoppingCartPage;
