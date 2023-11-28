import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts";
import "./index.css";

const ProductGallery = ({category}) => {
  const handleScroll = (direction) => {
    const container = document.getElementById("slider");
    const scrollAmount = 1140;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "Application/json");

      var raw = JSON.stringify({
        Authorization: "Bearer " + localStorage.getItem("TokenProducts"),
        "Content-Type": "Application/json",
        "X-CATEGORIA": category,
        "X-SUBCATEGORIA": "",
        "X-MARKS": "",
        "X-DISPONIBILIDAD": "1",
        "X-PARTNUM": "",
        "X-DESCUENTO": "0",
        "X-NUMBERPAGE": "",
        "X-PRECIOINICIAL": "",
        "X-PRECIOFINAL": "",
        "X-MODULO": "",
        "X-PALABRACLAVE": "",
        "X-PRODUCTONUEVO": "",
        "X-COLOR": "",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://open-backend-beryl.vercel.app/catalog",
          requestOptions
        );
        const result = await response.json();
        setProducts(result.listaproductos);
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-productGallery">
      <div
        className="button-productGallery product-left no-mobile"
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
      <div className="content-component">
        <AllProducts products={products.slice(0,10)} type={true}/>
      </div>
      <div
        className="button-productGallery product-right no-mobile"
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
  );
};

export default ProductGallery;
