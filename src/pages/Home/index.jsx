import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductGallery from "../../components/ProductGallery";
import BannerCarousel from "../../components/BannerCarousel";
import MarkCarousel from "../../components/MarkCarousel";
import Impresoras from "../../assets/home/ImpresiónMPS.png"
import Almacenamiento from "../../assets/home/AlmacenamientoMPS.png";
import Instalacion from "../../assets/services/Instalaciones.png";
import MantenimientoCorrectivo from "../../assets/services/Mantenimiento-Correctivo.png";
import MantenimientoPreventivo from "../../assets/services/Mantenimiento-Preventivo.png";
import "./index.css";

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-main">
      <BannerCarousel />
      <div className="folders-cards-main">
        <div className="folders-cards">
          <div className="first-folder-card"  onClick={() => navigate("/product/category/Almacenamiento")}> 
            <img src={Almacenamiento} />
            <div className="text-folder">
              <p>Guarda toda la informacion <strong>Almacenamiento</strong></p>
              <p className="folder-button">Ver más</p>
            </div>
          </div>
          <div className="second-folder-card" onClick={() => navigate("/product/category/Impresoras")}>
            <img src={Impresoras} />
            <div className="text-folder">
              <p>Imprime fotos de alta calidad <strong>Impresión y Fotografia</strong></p>
              <p className="folder-button">Ver más</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="h1-title">Lo último en Gaming</h1>
      <div className="product-page-content">
        <ProductGallery category={"gaming"} />
      </div>
      <h1 className="h1-title">Ultimos Computadores</h1>
      <div className="product-page-content">
        <ProductGallery category={"computadores"} />
      </div>
      <h1 className="h1-title">Ultimos Celulares y Tablets</h1>
      <div className="product-page-content">
        <ProductGallery category={"celulares y tablets"} />
      </div>
      <div>
        <div className="h1-title">
          <h1>Nuestros servicios</h1>
        </div>
        <div className="container-card-services" onClick={() => navigate("/services")}>
          <div className="tablet-cards">
            <div className="div-card-services one-card">
              <img src={Instalacion} alt="" />
              <div className="text-card-services">
                <div>
                  <h3>Instalaciones</h3>
                  <p>
                    Instalación técnica y profesional de equipos, maquinas y
                    partes electrónicas.
                  </p>
                </div>
              </div>
            </div>
            <div className="div-card-services two-card" onClick={() => navigate("/services")}>
              <img src={MantenimientoCorrectivo} alt="" />
              <div className="text-card-services">
                <div>
                  <h3>Mantenimiento Correctivo</h3>
                  <p>Correccion u Repacion de equipos y maquinarias</p>
                </div>
              </div>
            </div>
          </div>
          <div className="three-card">
            <div className="div-card-services" onClick={() => navigate("/services")}>
              <img src={MantenimientoPreventivo} alt="" />
              <div className="text-card-services">
                <div>
                  <h3>Mantenimiento Preventivo</h3>
                  <p>Mantenimiento Anticipado con fines de prevencion de daños</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarkCarousel />
    </div>
  );
};

export default HomePage;
