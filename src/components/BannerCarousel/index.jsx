import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banne1 from "../../assets/banner/Cerradura.jpg";
import Banne2 from "../../assets/banner/kingston.jpeg";
import Banne3 from "../../assets/banner/termometro.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

function BannerCarousel() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} className="carousel">
        <div>
          <img src={Banne1} alt="Imagen 1" />
        </div>
        <div>
          <img src={Banne2} alt="Imagen 2" />
        </div>
        <div>
          <img src={Banne3} alt="Imagen 3" />
        </div>
      </Carousel>
    </div>
    
  );
}

export default BannerCarousel;
