import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AllProducts = ({ products, type }) => {
  const navigate = useNavigate();
  const [menu] = useState(type);
  const limitarTexto = (texto) => {
    const palabras = texto.split(' ');
    if (palabras.length <= 5){
      return texto
    }
    const textoLimitado = palabras.slice(0, 8).join(' ');
    return textoLimitado + '...';
  }


  return (
    <div className="content-all-product">
      <div className="product-gallery" id="slider">
        {products.map((product) => (
          <div key={product.Name} className={`product-card ${menu ? '':'isNone'}`} onClick={() => navigate(`product/${product.PartNum}`)}>
            <div>
              <h2 className="h2-product">{product.Familia}</h2>
              <h3 className="h3-product">{limitarTexto(product.Name)}</h3>
            </div>
            <div className="product-card-img">
              <img src={product.Imagenes[1]} alt={product.Name} />
            </div>
            <div>
              <p className="price-product">$ {product.precio.toLocaleString()}</p>
              <p className="coment-product">Producto con IVA incluido</p>
            </div>
          </div>
        ))}
        {products.map((product) => (
          <div key={product.Name} className={`product-card ${menu ? 'isNone':'row'}`} onClick={() => navigate(`product/${product.PartNum}`)}>
            <div className="product-card-img">
              <img src={product.Imagenes[1]} alt={product.Name} />
            </div>
            <div>
              <h2 className="h2-product">{product.Familia}</h2>
              <h3 className="h3-product">{product.Name}</h3>
              <p className="price-product">$ {product.precio.toLocaleString()}</p>
              <p className="coment-product">Producto con IVA incluido</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;