import React, { useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container-master">
      <h1 className="h1">Iniciar Sesi&oacute;n</h1>
      <div className="container-main">
        <div className="container">
          <h2>Cliente Registrado</h2>
          <p>Si tienes una cuenta, inicia sesión con tu Usuario o Dirección de correo electrónico.</p>
          <form onSubmit={handleSubmit}>
            <label>Usuario o Correo Electronico</label>
            <input type="text" value={username} onChange={handleUsernameChange} required/>
            <br />
            <label>Contraseña</label>
            <input type="text" value={password} onChange={handlePasswordChange} required/>
            <br />
            <div className="button-login">
              <button type="submit" className="submit-button">Iniciar Sesión</button>
            </div>
            <Link to="" className="link-button">Olvide mi Contraseña</Link>
          </form>
        </div>

        <div className="container container-second">
          <h2>¿Nuevo cliente?</h2>
          <p>Crear una cuenta tiene muchos beneficios:</p>
          <ul>
            <li>Mantener m&aacute;s de una dirección.</li>
            <li>Pagos m&aacute;s directos</li>
            <li>Seguimiento de pedidos y más</li>
          </ul>
          <div onClick={() => navigate("/register")}className="button-register">Crear una Cuenta</div>
        </div>
      </div>
    </div>
  );
}

export default Login;

