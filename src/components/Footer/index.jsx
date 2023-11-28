import {React, useState} from "react";
import {Link} from "react-router-dom";
import MasterCard from "../../assets/footer/maestro.png";
import Visa from "../../assets/footer/visa.png";
import Pse from "../../assets/footer/pse.png";
import "./index.css";

function Footer() {
  const [ menuFooterInformation, setMenuFooterInformation ] = useState(true);
  const toggleMenuFooterInformation = () => {
    setMenuFooterInformation(!menuFooterInformation);
  };
  const [ menuFooterClient, setMenuFooterClient ] = useState(true);
  const toggleMenuFooterClient = () => {
    setMenuFooterClient(!menuFooterClient);
  };
  const [ menuFooterExtra, setMenuFooterExtra ] = useState(true);
  const toggleMenuFooterExtra = () => {
    setMenuFooterExtra(!menuFooterExtra);
  };
  const [ menuFooterCount, setMenuFooterCount ] = useState(true);
  const toggleMenuFooterCount = () => {
    setMenuFooterCount(!menuFooterCount);
  };
  const [ menuFooterContact, setMenuFooterContact ] = useState(true);
  const toggleMenuFooterContact = () => {
    setMenuFooterContact(!menuFooterContact);
  };

  return (
    <footer>
      <div className="container-footer-first">
        <div className="container-footer-text">
          <h1 className="h1-footer">Suscríbase a nuestro boletín de noticias.</h1>
          <p className="p-footer">S&eacute; el primero en enterarte de las últimas ofertas.</p>
        </div>
        <div className="footer-first-input">
          <form>
            <input type="text" className="input-footer" required placeholder="Correo Electr&oacute;nico"/>
            <button type="submit" className="botton-footer">Subscribete</button>
          </form>
        </div>
      </div>

      <div className="container-footer-second isTable">
        <div className="div-footer-second">
          <h2 className="h2-footer-second">Informacion</h2>
          <ul>
            <li><Link to="/aboutUs" className="link-footer">Acerca de Nosotros</Link></li>
            <li><Link to="/ourServices" className="link-footer">Nuestros Servicios</Link></li>
            <li><Link to="/termsConditions" className="link-footer">T&eacute;rminos y Condiciones</Link></li>
            <li><Link to="/policy" className="link-footer">Pol&iacute;ticas de Privacidad</Link></li>
          </ul>
        </div>
        <div className="div-footer-second">
          <h2 className="h2-footer-second">Servicio Al Cliente</h2>
          <ul>
            <li><Link to="/contactPage" className="link-footer">Cont&aacute;ctenos</Link></li>
            <li><Link to="/contactPage" className="link-footer">Devoluciones</Link></li>
          </ul>
        </div>
        <div className="div-footer-second">
          <h2 className="h2-footer-second">Extras</h2>
          <ul>
            <li><Link to="" className="link-footer">Promociones</Link></li>
            <li><Link to="" className="link-footer">Marcas</Link></li>
          </ul>
        </div>
        <div className="div-footer-second">
          <h2 className="h2-footer-second">Cuenta</h2>
          <ul>
            <li><Link to="/login" className="link-footer">Iniciar Sesion</Link></li>
            <li><Link to="/register" className="link-footer">Registrarse</Link></li>
            <li><Link to="" className="link-footer">Mi Cuenta</Link></li>
          </ul>
        </div>
        <div className="div-footer-contacto">
          <h2 className="h2-footer-second">Cont&aacute;ctenos</h2>
          <ul>
            <li>Calle 18 # 1E - 100 Caobos, Cúcuta - Colombia</li>
            <li>info@openservices.com.co</li>
            <li>(+57) 7 5712416</li>
            <li>(+57) 310 2740359</li>
          </ul>
        </div>
      </div>

      <div className="tablet">
        <div>
          <div className={`section-nav-footer ${menuFooterInformation ? 'isNone' : ''}`} onClick={toggleMenuFooterInformation}>
            <h2 className="h2-footer-second-nav">Informacion</h2>
            <svg className={`svg-footer-nav ${menuFooterInformation ? '' : 'isNone'}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg className={`svg-footer-nav-section ${menuFooterInformation ? 'isNone' : ''}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div className={`nav-footer-section ${menuFooterInformation ? 'isNone' : ''}`}>
            <ul>
              <li><Link onClick={toggleMenuFooterInformation} to="/aboutUs" className="link-footer">Acerca de Nosotros</Link></li>
              <li><Link onClick={toggleMenuFooterInformation} to="/ourServices" className="link-footer">Nuestros Servicios</Link></li>
              <li><Link onClick={toggleMenuFooterInformation} to="/termsConditions" className="link-footer">T&eacute;rminos y Condiciones</Link></li>
              <li><Link onClick={toggleMenuFooterInformation} to="/policy" className="link-footer">Pol&iacute;ticas de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-nav-footer" onClick={toggleMenuFooterClient}>
            <h2 className="h2-footer-second-nav">Servicio Al Cliente</h2>
            <svg className={`svg-footer-nav ${menuFooterClient ? '' : 'isNone'}`}  width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg className={`svg-footer-nav-section ${menuFooterClient ? 'isNone' : ''}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div className={`nav-footer-section ${menuFooterClient ? 'isNone' : ''}`}>
            <ul>
              <li><Link onClick={toggleMenuFooterClient} to="/contactPage" className="link-footer">Cont&aacute;ctenos</Link></li>
              <li><Link onClick={toggleMenuFooterClient} to="" className="link-footer">Devoluciones</Link></li>
              <li><Link onClick={toggleMenuFooterClient} to="" className="link-footer">Mapa del Sitio Web</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-nav-footer" onClick={toggleMenuFooterExtra}>
            <h2 className="h2-footer-second-nav">Extras</h2>
            <svg className={`svg-footer-nav ${menuFooterExtra ? '' : 'isNone'}`}   width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg className={`svg-footer-nav-section ${menuFooterExtra ? 'isNone' : ''}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div className={`nav-footer-section ${menuFooterExtra ? 'isNone' : ''}`}>
            <ul>
              <li><Link onClick={toggleMenuFooterExtra} to="" className="link-footer">Promociones</Link></li>
              <li><Link onClick={toggleMenuFooterExtra} to="" className="link-footer">Marcas</Link></li>
              <li><Link onClick={toggleMenuFooterExtra} to="" className="link-footer">Tarjeta de Regalo</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-nav-footer" onClick={toggleMenuFooterCount}>
            <h2 className="h2-footer-second-nav">Cuenta</h2>
            <svg className={`svg-footer-nav ${menuFooterCount ? '' : 'isNone'}`}   width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg className={`svg-footer-nav-section ${menuFooterCount ? 'isNone' : ''}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div className={`nav-footer-section ${menuFooterCount ? 'isNone' : ''}`}>
            <ul>
              <li><Link onClick={toggleMenuFooterCount} to="" className="link-footer">Mi Cuenta</Link></li>
              <li><Link onClick={toggleMenuFooterCount}  to="" className="link-footer">Historial de Pedidos</Link></li>
              <li><Link onClick={toggleMenuFooterCount}  to="" className="link-footer">Lista de Deseos</Link></li>
              <li><Link onClick={toggleMenuFooterCount}  to="" className="link-footer">Afiliado</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="section-nav-footer" onClick={toggleMenuFooterContact}>
            <h2 className="h2-footer-second-nav">Cont&aacute;ctenos</h2>
            <svg className={`svg-footer-nav ${menuFooterContact ? '' : 'isNone'}`}   width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg className={`svg-footer-nav-section ${menuFooterContact ? 'isNone' : ''}`} width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76581 6.39648L9.76581 8.39648L7.76581 10.3965" stroke="black" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div className={`nav-footer-section ${menuFooterContact ? 'isNone' : ''}`}>
            <ul>
              <li>Calle 18 # 1E - 100 Caobos, Cúcuta - Colombia</li>
              <li>info@openservices.com.co</li>
              <li>(+57) 7 5712416</li>
              <li>(+57) 310 2740359</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-footer-thrid">
        <div>
          <p>Todos los derechos reservados &copy; 2023</p>
        </div>
        <div>
          <img src={MasterCard} alt="mastercard" />
          <img src={Visa} alt="visa" />
          <img src={Pse} alt="pse" className="img-footer-thrid"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
