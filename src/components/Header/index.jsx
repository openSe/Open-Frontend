import { React, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../../assets/icons/OpenServices[Logo].jpg";
import Laptop from "../../assets/header/laptop-40.png";
import Gaming from "../../assets/header/gamepad.png";
import Celular from "../../assets/header/ipad-40.png";
import Imprisero from "../../assets/header/print-40.png";
import Almacenamiento from "../../assets/header/disc-40.png";
import Redes from "../../assets/header/database-40.png";
import Accesorios from "../../assets/header/teclado-40.png";
import Energia from "../../assets/header/laptop-40.png";
import UserName from "../User";
import Lupa from "../SearchBox";
import "./index.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = window.localStorage.getItem("token_app");
  const [menuUser, setMenuUser] = useState(true);
  const toggleMenuUser = () => {
    setMenuUser(!menuUser);
  };
  const [menuProduct, setMenuProduct] = useState(true);
  const toggleMenuProduct = () => {
    setMenuProduct(!menuProduct);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-bar no-mobile">
          <div className="header-content-left" onClick={() => navigate("/")}>
            <img src={Logo} alt="Digital Booking" />
          </div>

          <div className="header-content-tablet">
            <div className="search-container">
              <Lupa />
            </div>

            
              {user?.name ? (
                <UserName />
              ) : (
                <div className="header-content-right">
                  <div className="content-right">
                    <Link to="/login" className="inicio">
                      Iniciar Sesi&oacute;n
                    </Link>
                    <Link to="/register" className="inicio">
                      Crear cuenta
                    </Link>
                  </div>
                </div>
              )}
            
          </div>
        </div>

        <div className="header-information">
          <p>La mejor Tecnocologia con Nosotros</p>
        </div>

        <div className="header-bar mobile">
          <div className="header-center-mobil">
            <div className="svg-icon" onClick={toggleMenuProduct}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <nav
                className={`nav-product-sections ${
                  menuProduct ? "isNone" : ""
                }`}
              >
                <div className="nav-product-div">
                  <img src={Logo} alt="OpenServices-Logo" />
                  <svg
                    onClick={toggleMenuProduct}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
                <ul>
                  <li>
                    <Link
                      to="/product/category/Computadores"
                      className="link-nav-products"
                    >
                      <p>Computadores</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Gaming"
                      className="link-nav-products"
                    >
                      <p>Gaming</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Celulares y Tablets"
                      className="link-nav-products"
                    >
                      <p>Celular y Tablets</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Impresoras"
                      className="link-nav-products"
                    >
                      <p>Impresoras</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Almacenamiento"
                      className="link-nav-products"
                    >
                      <p>Almacenamiento</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Redes"
                      className="link-nav-products"
                    >
                      <p>Redes</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Accesorios y Perifericos"
                      className="link-nav-products"
                    >
                      <p>Accesorios y Perifericos</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/category/Energia"
                      className="link-nav-products"
                    >
                      <p>Energia</p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965"
                          stroke="black"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-content-left" onClick={() => navigate("/")}>
              <img src={Logo} alt="Digital Booking" />
            </div>
            {user?.name ? (
              <div>
                <div onClick={toggleMenuUser} className="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <nav className={`nav-user ${menuUser ? "isNone" : ""}`}>
                  <ul>
                    <li>
                      <Link
                        className="link-user"
                        onClick={toggleMenuUser}
                      >
                        Cerrar sesion
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            ):(
              <div>
                <div onClick={toggleMenuUser} className="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <nav className={`nav-user ${menuUser ? "isNone" : ""}`}>
                  <ul>
                    <li>
                      <Link
                        to="/login"
                        className="link-user"
                        onClick={toggleMenuUser}
                      >
                        Iniciar sesion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="link-user"
                        onClick={toggleMenuUser}
                      >
                        Crear cuenta
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          <div>
            {user?.name ? (
              <div className="user-mobile">
                <div className="search-container">
                  <Lupa />
                </div>
                <div onClick={() => navigate("/shoppingCart")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </div>
              </div>
            ):(
              <div className="search-container">
                <Lupa />
              </div>
            )}
          </div>
        </div>

        {location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          location.pathname !== "/contactPage" && (
            <div className="header-content-main no-mobile">
              <Link
                to="/product/category/Computadores"
                className="link-sections"
              >
                <div className="content-img">
                  <img src={Laptop} alt="Computadores" />
                  <p>Computadores</p>
                </div>
              </Link>
              <Link to="/product/category/Gaming" className="link-sections">
                <div className="content-img">
                  <img src={Gaming} alt="Gaming" />
                  <p>Gaming</p>
                </div>
              </Link>
              <Link
                to="/product/category/Celulares y Tablets"
                className="link-sections"
              >
                <div className="content-img img-top">
                  <img src={Celular} alt="Celulares y Tablets" />
                  <p>
                    Celular y<br />
                    Tablets
                  </p>
                </div>
              </Link>
              <Link to="/product/category/Impresoras" className="link-sections">
                <div className="content-img">
                  <img src={Imprisero} alt="Impresoras" />
                  <p>Impresoras</p>
                </div>
              </Link>
              <Link
                to="/product/category/Almacenamiento"
                className="link-sections"
              >
                <div className="content-img">
                  <img src={Almacenamiento} alt="Almacenamiento" />
                  <p>Almacenamiento</p>
                </div>
              </Link>
              <Link to="/product/category/Redes" className="link-sections">
                <div className="content-img">
                  <img src={Redes} alt="Redes" />
                  <p>Redes</p>
                </div>
              </Link>
              <Link
                to="/product/category/Accesorios y Perifericos"
                className="link-sections"
              >
                <div className="content-img img-top">
                  <img src={Accesorios} alt="Accesorios y Perifericos" />
                  <p>
                    Accesorios y<br />
                    Perifericos
                  </p>
                </div>
              </Link>
              <Link to="/product/category/Energia" className="link-sections">
                <div className="content-img">
                  <img src={Energia} alt="Energia" />
                  <p>Energia</p>
                </div>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
}

export default Header;