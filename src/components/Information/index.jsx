import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function information() {
    return (
        <div>
            <h1 className="h2-information">Informacion</h1>
            <ul>
                <li><Link to="/aboutUs" className="link-footer">Acerca de Nosotros</Link></li>
                <li><Link to="/ourServices" className="link-footer">Nuestros Servicios</Link></li>
                <li><Link to="/termsConditions" className="link-footer">T&eacute;rminos y Condiciones</Link></li>
                <li><Link to="/policy" className="link-footer">Pol&iacute;ticas de Privacidad</Link></li>
            </ul>
        </div>
)};

export default information;