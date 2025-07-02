import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MarkCarousel from "../../components/MarkCarousel"
import { useLocalStorage } from "../../components/LocalStorage/useLocalStorage";
import FlechaArriba from "../../assets/cart/flechaArriba.png";
import FlechaAbajo from "../../assets/cart/flechaAbajo.png";
import "./index.css";
const IndividualProductPage = () => {
  const navigate = useNavigate();
  const { productPartNum } = useParams();
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const getResolution = () => {
    if (window.matchMedia("(min-width: 1440px)").matches) {
      return 665;
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      return 480;
    } else {
      return 200;
    }
  };
  console.log(getResolution());
  const handleScroll = (direction) => {
    const container = document.getElementById("slider");
    const scrollAmount = getResolution();
    console.log(getResolution());
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://open-backend-beryl.vercel.app/catalog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Authorization: "Bearer " + localStorage.getItem("TokenProducts"),
            "Content-Type": "Application/json",
            "X-PALABRACLAVE": productPartNum,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.listaproductos && result.listaproductos.length > 0) {
            setProductData(result.listaproductos[0]);
          } else {
            setProductData(null);
          }
        } else {
          console.error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, [productPartNum]);
  const increaseQuantity = () => {
    if (quantity < productData.Quantity) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [localItems, setLocalItems] = useLocalStorage("item", "");
  const setLocalStorage = (id, cantidad, img, precio, nombre) => {
    const newItemCart = {
      numPart: id,
      qty: cantidad,
      image: img,
      price: precio,
      name: nombre,
    };
    setLocalItems(newItemCart);
    console.log(localItems);
  };

  return (
    <div>
      {productData ? (
        <div >
          <div className="div-main-product no-mobile">
            <div className="div-product-spec">
              <div className="div-product-content">
                <h1>{productData.Name}</h1>
                <h3>Color: {productData.color}</h3>
                <h3>Marca: {productData.Marks}</h3>
                <div className="product-container-cart">
                  <h3>Producto Disponible</h3>
                  <h4>${productData.precio.toLocaleString()}</h4>
                  <p>Precio antes de IVA</p>
                  <div className="qty-card">
                    <p className="qty-cart">Cantidad:</p>
                    <div className="container-quantity">
                      <div className="div-quantity">{quantity}</div>
                      <div className="div-button">
                        <button
                          onClick={() => increaseQuantity()}
                          className="button-car"
                        >
                          <img src={FlechaArriba} alt="flechaArriba" />
                        </button>
                        <button
                          onClick={() => decreaseQuantity()}
                          className="button-car"
                        >
                          <img src={FlechaAbajo} alt="flechaAbajo" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="button-section-product">
                    <button className="button-shop"
                      onClick={() =>
                        setLocalStorage(
                          productData.PartNum,
                          quantity,
                          productData.Imagenes[1],
                          productData.precio,
                          productData.Name
                      )} 
                    ><div onClick={() => navigate("/shoppingAddress")}>Comprar</div></button>
                    <button
                      className="button-cart"
                      onClick={() =>
                        setLocalStorage(
                          productData.PartNum,
                          quantity,
                          productData.Imagenes[1],
                          productData.precio,
                          productData.Name
                        )
                      }
                    >
                      A&ntilde;adir al carrito
                    </button>
                  </div>
                </div>
                <div className="content-spec-end">
                  <p>¿Alguna pregunta?</p>
                  <Link className="link-content-spec-end" to="/contactPage">
                    Contactanos
                  </Link>
                </div>
              </div>
            </div>
            <div className="img-product">
              <div className="main-img">
                <div
                  className="button-product button-product-left"
                  onClick={() => handleScroll("left")}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="rgba(0, 0, 0, 0.9)"
                  >
                    <path
                      d="M20.0549 6.99999L11.0596 15.9953L20.0642 25L19.0036 26.0607L8.93823 15.9953L18.9942 5.93933L20.0549 6.99999Z"
                      fill="rgba(0, 0, 0, 0.9)"
                    ></path>
                  </svg>
                </div>
                <div className="content-main-img" id="slider">
                  {productData.Imagenes.slice(0, 3).map((imagen, index) => (
                    <img
                      className="isTable"
                      key={index}
                      src={imagen}
                      alt={productData.PartNum}
                    />
                  ))}
                  <div className="img-product tablet">
                    <img
                      src={productData.Imagenes[2]}
                      alt={productData.PartNum}
                    />
                  </div>
                </div>
                <div
                  className="button-product button-product-right"
                  onClick={() => handleScroll("right")}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="rgba(0, 0, 0, 0.9)"
                  >
                    <path
                      d="M11.943 6.99999L20.9383 15.9953L11.9336 25L12.9943 26.0607L23.0596 15.9953L13.0036 5.93933L11.943 6.99999Z"
                      fill="rgba(0, 0, 0, 0.9)"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="preview-img">
                {productData.Imagenes.slice(0, 3).map((imagen, index) => (
                  <div className="only-preview-img">
                    <img key={index} src={imagen} alt={productData.PartNum} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="div-main-product mobile">
            <div className="img-product">
              <div className="main-img">
                <div className="content-main-img" id="slider">
                  {productData.Imagenes.slice(0, 3).map((imagen, index) => (
                    <img
                      className="isTable"
                      key={index}
                      src={imagen}
                      alt={productData.PartNum}
                    />
                  ))}
                  <div className="img-product tablet">
                    <img
                      src={productData.Imagenes[2]}
                      alt={productData.PartNum}
                    />
                  </div>
                </div>
              </div>
              <div className="preview-img">
                {productData.Imagenes.slice(0, 3).map((imagen, index) => (
                  <div className="only-preview-img">
                    <img key={index} src={imagen} alt={productData.PartNum} />
                  </div>
                ))}
              </div>
            </div>
            <div className="div-product-spec">
              <div className="div-product-content">
                <h1>{productData.Name}</h1>
                <h3>Color: {productData.color}</h3>
                <h3>Marca: {productData.Marks}</h3>
                <div className="product-container-cart">
                  <h3>Producto Disponible</h3>
                  <h4>${productData.precio.toLocaleString()}</h4>
                  <p>Precio antes de IVA</p>
                  <div className="qty-card">
                    <p className="qty-cart">Cantidad:</p>
                    <div className="container-quantity">
                      <div className="div-quantity">{quantity}</div>
                      <div className="div-button">
                        <button
                          onClick={() => increaseQuantity()}
                          className="button-car"
                        >
                          <img src={FlechaArriba} alt="flechaArriba" />
                        </button>
                        <button
                          onClick={() => decreaseQuantity()}
                          className="button-car"
                        >
                          <img src={FlechaAbajo} alt="flechaAbajo" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="button-section-product">
                    <button 
                    onClick={() =>
                      setLocalStorage(
                        productData.PartNum,
                        quantity,
                        productData.Imagenes[1],
                        productData.precio,
                        productData.Name
                      )} 
                    className="button-shop"><div onClick={() => navigate("/shoppingAddress")}>Comprar</div></button>
                    <button
                      className="button-cart"
                      onClick={() =>
                        setLocalStorage(
                          productData.PartNum,
                          quantity,
                          productData.Imagenes[1],
                          productData.precio,
                          productData.Name
                        )
                      }
                    >
                      A&ntilde;adir al carrito
                    </button>
                  </div>
                </div>
                <div className="content-spec-end">
                  <p>¿Alguna pregunta?</p>
                  <Link className="link-content-spec-end" to="/contactPage">
                    Contactanos
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ) : (
        <div className="load-product-div">
          <p>Cargando producto...</p>
        </div>
      )}

      <MarkCarousel />
    </div>
  );
};

export default IndividualProductPage;

